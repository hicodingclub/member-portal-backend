const schema = require('./member');

const brief = "first_name last_name photo";
const detail = "first_name last_name photo";
const create = "first_name last_name photo";
const edit = "first_name last_name photo";
const textSearch = "first_name last_name";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "", //Not show on public. Identical to user profile
    name: "Member",
    mraUI: {
        listType: 'list', // table, list, or grid
        listTitle: 'Members',
        detailTitle: 'Member',
    },


    mraBE: {
        collection: 'musers', // MongdoDB collection corresponding to this schema
    },
};