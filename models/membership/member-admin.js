const schema = require('./member');

const brief = "firstname lastname photo email phone";
const detail = "firstname lastname photo email phone";
const create = "firstname lastname photo email phone";
const edit = "firstname lastname photo email phone";
const textSearch = "firstname lastname";
const index = "firstname lastname";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,

    views,
    api: "LRUMA", //E - export, M - eMail, A - Archive
    name: "Member",
    mraUI: {
        listType: 'list', // table, list, or grid
        listTitle: 'Members',
        detailTitle: 'Member',
    },

    mraBE: {
        collection: 'hcc_mem_auth_muser', // MongdoDB collection corresponding to this schema
    },
}