const schema = require('./member');

const brief = "first_name last_name photo email phone";
const detail = "first_name last_name photo email phone";
const create = "first_name last_name photo email phone";
const edit = "first_name last_name photo email phone";
const textSearch = "first_name last_name";
const index = "first_name last_name";

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
        collection: 'musers', // MongdoDB collection corresponding to this schema
    },
}