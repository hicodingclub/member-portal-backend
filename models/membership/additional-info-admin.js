const schema = require('./additional-info');

var brief = "member grade team";
var detail = "member grade team guardianEmail programmingSkill designingSkill githubExp";
var creat = "member grade team guardianEmail programmingSkill designingSkill githubExp";
var edit = "grade team guardianEmail programmingSkill designingSkill githubExp";
var textSearch = "grade guardianEmail";
var index = "";

var views = [brief, detail, creat, edit, textSearch, index];


//Export model
module.exports = {
    schema,
    views,
    mraUI: {
        listType: 'table', // table, list, or grid
        listToDetail: 'link', // link, click, none
    },
};