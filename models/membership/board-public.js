const schema = require('./board');

const brief = "name title photo email";
const detail = "name title photo email order";
const create = "name title photo email";
const edit = "name title photo email";
const textSearch = "name email title";
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "L",
    name: "Board Members",
    mraUI: {
        listType: 'grid', // table, list, or grid
        listTitle: 'Board Members',
        detailTitle: 'Board Member',
        defaultListSort: { 'order': 'asc' },
    },
};