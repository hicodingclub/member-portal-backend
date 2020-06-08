// Note: this schema is a clone of auth/model.user. Edit must be made on both sides

const mongoose = require('mongoose');
const { validateEmail, validatePhone, emailValidate, phoneValidate } = require('../validators');

const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true, index: { unique: true, sparse: true } },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: { unique: true, sparse: true },
        //required: 'Email address is required',
        validate: {
            validator: validateEmail,
            message: 'Please fill a valid email address',
        },
        mraEmailRecipient: true, // if this email can be used by sendEmail Action 
    },
    phone: {
        type: String,
        trim: true,
        index: { unique: true, sparse: true },
        validate: {
            validator: validatePhone,
            message: 'Please fill a valid phone number'
        }
    },
    status: { type: String, enum: ['Enabled', 'Disabled', 'Pending'], default: 'Enabled' },
    since: { type: Date, default: Date.now },
    password: { type: String, required: true },


    first_name: { type: String, maxlength: 100 },
    last_name: { type: String, maxlength: 100 },
    photo: {
        type: String,
        mraType: 'picture',
        mraSharable: false
    },
    description: { type: String, textarea: true },
});

const validators = {
    "email": emailValidate,
    "phone": phoneValidate,
}
schema.mddsValidators = validators;

module.exports = schema;