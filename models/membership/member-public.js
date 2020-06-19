const schema = require('./member');

const brief = "firstname lastname photo";
const detail = "firstname lastname photo";
const create = "firstname lastname photo";
const edit = "firstname lastname photo";
const textSearch = "firstname lastname";
const index = "firstname lastname";

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