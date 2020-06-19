const schema = require('./additional-info');

var brief = "grade team";
var detail = "grade team[Desired Team] guardianEmail programmingSkill designingSkill githubExp[Github Experience]";
var creat = "grade team[Desired Team] guardianEmail programmingSkill designingSkill githubExp[Github Experience]";
var edit = "grade guardianEmail programmingSkill designingSkill githubExp[Github Experience]";
var textSearch = "grade guardianEmail";
var index = "grade";

var views = [brief, detail, creat, edit, textSearch, index];


module.exports = {
    schema,
    views,
    api: 'LCRU',
    name: 'Additional Member Information',
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    owner: { enable: true, type: 'user', field: 'member' },

    mraUI: {
        detailRefName: {
            Member: 'Additional Member Information',
        },

        detailTitle: 'Additional Member Information',
    },
};