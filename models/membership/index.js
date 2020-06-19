let memberDef = require('./member-admin');
let additionalInfoDef = require('./additional-info-admin');
let boardDef = require('./board-admin');
let leadDef = require('./lead-admin');

const schemas = {
    Member: memberDef,
    AdditionalInfo: additionalInfoDef,
    Board: boardDef,
    Lead: leadDef,
};

const config = {
    dateFormat: "MM-DD-YYYY",
    timeFormat: "hh:mm:ss",
    fileServer: {
        uploadUrl: '/api/files/upload',
        downloadUrl: '/api/files/download'
    }
}

const authz = {
    "module-authz": { "LoginUser": { "others": "", "own": "" }, "Anyone": "" },
}

module.exports = { schemas, config, authz };