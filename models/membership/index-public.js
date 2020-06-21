let additionalInfoDef = require('./additional-info-public');
let boardDef = require('./board-public');
let leadDef = require('./lead-public');

const schemas = {
    AdditionalInfo: additionalInfoDef,
    Board: boardDef,
    Lead: leadDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss',
    fileServer: {
        uploadUrl: '/api/files/upload',
        downloadUrl: '/api/files/download'
    }
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': '' },
    'AdditionalInfo': { 'LoginUser': { 'others': '', 'own': 'RU' }, 'Anyone': 'C' },
}

const DB_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = { schemas, config, authz, DB_CONFIG };