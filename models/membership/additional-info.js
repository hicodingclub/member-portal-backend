const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { validateEmail } = require('../validators');

const schema = new Schema({
    grade: {
        type: String,
        enum: ['8', '9', '10', '11', '12', 'other'],
        elementunique: true,
        required: true
    },
    guardianEmail: {
        type: String,
        required: false,
        maxlength: 100,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        mraEmailRecipient: true, // if this email can be used by sendEmail Action
    },
    programmingSkill: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        elementunique: true,
        description: 'How much do you know about programming? (1 is the lowest, 5 is the highest)',
        required: true
    },
    designingSkill: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        elementunique: true,
        description: 'How much do you know about designing? (1 is the lowest, 5 is the highest)',
        required: true
    },
    team: {
        type: String,
        enum: ['Web Development', 'UI Design'],
        elementunique: true,
        description: 'which team do you want to join first?',
        required: true
    },
    githubExp: {
        type: String,
        enum: ['No', 'Yes, web access only', 'Yes, web and git access'],
        elementunique: true,
        required: true
    },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true }, //reference to the associated member. Not required to allow any one to register.

});

schema.index({ member: 1 }, { unique: true }); // schema level

module.exports = schema;