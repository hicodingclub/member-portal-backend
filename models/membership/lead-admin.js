const schema = require('./board');

const brief = "name title photo email order";
const detail = "name title photo email order";
const create = "name title photo email order";
const edit = "name title photo email order";
const textSearch = "name email title";
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    name: "Team Leads",
    mraUI: {
        listTitle: 'Team Leads',
        listType: 'list', // table, list, or grid
        defaultListSort: { 'order': 'asc' },
    },
};