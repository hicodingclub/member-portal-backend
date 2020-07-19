const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRootPath = require('app-root-path');

const logger = require('./lib/logger');

// Start mongoose DB
require('./db');

const meanRestExpress = require('@hicoder/express-core');

// setup emailing
const { MddsEmailer } = require('@hicoder/express-emailing');
const awsConfFile = path.join(appRootPath.toString(), process.env.AWS_CONFIG_FILE_NAME || '.aws.conf.json');
const emailer = new MddsEmailer(awsConfFile);
const emailInfoForAuth = {
    serverUrl: process.env.SERVER_URL || 'http://localhost:3000',
    serverUrlPasswordReset: process.env.PASSWD_RESET_URL || 'http://localhost:3000/auth/reset/',
    serverUrlRegVerification: process.env.REGISTRATION_VERIFICATION_URL || 'http://localhost:3000/auth/regverification/',
}

// for auth client
let option = {
    authz: 'role', // user role based authorization
};
const AuthApp = require('@hicoder/express-auth-app');
const authApp = new AuthApp();
const authFuncs = authApp.getAuthFuncs(option);
// for auth server
const authServer = require('@hicoder/express-auth-server');
const defaultUserDef = authServer.authUserDef;
option = {
    authz: 'role', // user group based authorization
    authzModel: 'user', // generate default authorization module based on 'user'.
    registerEmailVerification: false,
};
const authRouter = authServer.GetDefaultAuthnRouter(defaultUserDef, option);
authRouter.setEmailer(emailer, emailInfoForAuth); // set the emailer instance for sending emails
const usersRouter = meanRestExpress.RestRouter(defaultUserDef, 'Users', authFuncs);

//for membership models
const membershipDbDefinition = require('./models/membership/index-public');
const membershipRouter = meanRestExpress.RestRouter(membershipDbDefinition, 'Membership', authFuncs);

//for public models
// const publicInfoDbDefinition = require('./models/publicInfo/index-public');
// const publicInfoRouter = meanRestExpress.RestRouter(publicInfoDbDefinition, 'PublicInfo', authFuncs);

//file server
const fileSvr = require('@hicoder/express-file-server');
const defaultAdminSysDef = fileSvr.sampleAdminSysDef;
const fileSOption = {
    storage: 'fs',
    directory: path.join(__dirname, 'storage', 'uploads'),
    linkRoot: '/api/files', //link = linkRoot + '/download' - download needs to be enabled.
}
const dbSOption = {
    storage: 'db',
    linkRoot: '/api/files', //link = linkRoot + '/download' - download needs to be enabled.
}
const fileSvrRouter = fileSvr.ExpressRouter(defaultAdminSysDef, 'Files', authFuncs, fileSOption);

// this is special: we only get the router, but will only use it internally for authApp to pass managed access modules to it.
// there is no external routing path defined for it because we don't manage public access in public facing app.
const authzRolesRouter = authServer.GetDefaultUserRolesManageRouter('Internal-Roles', authFuncs); // user roles module

//Authorization App Client. Call it after all meanRestExpress resources are generated.
const publicModules = ['Users', 'Files', 'Membership']; // the modules that for public access
//pass in authzRolesRouter so authApp can upload the managed role modules to authzRolesRouter
authApp.run('local', 'app-key', 'app-secrete', authzRolesRouter, { 'roleModules': publicModules });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api/academics', academicsRouter);
app.use('/api/membership', membershipRouter);
app.use('/api/files', fileSvrRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

// Fall back, return index.html
app.get(/.*/, function(req, res, next) {
    if (req.accepts('html')) {
        return res.sendFile(path.join(__dirname, './public/index.html'));
    } else {
        return next();
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    const allowedErrCode = [400, 401, 403, 404];
    if (!allowedErrCode.includes(err.status)) {
        logger.error(err)
    }

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
