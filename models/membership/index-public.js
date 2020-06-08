let additionalInfoDef = require('./additional-info-public');

const schemas = {
    AdditionalInfo: additionalInfoDef,
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

module.exports = { schemas, config, authz };