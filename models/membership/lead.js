const mongoose = require('mongoose');
const { validateEmail, validatePhone, emailValidate, phoneValidate } = require('../validators');

const Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true, textarea: false },
    email: {
        type: String,
        required: true,
        mraEmailRecipient: true, // if this email can be used by sendEmail Action 
        validate: {
            validator: validateEmail,
            message: 'Please fill a valid email address',
        },
    },
    // mraType: a link to a picture; mraPresent: present the picture; mraSharable: if the picture is sharable with other items
    photo: {
        type: String,
        required: true,
        mraType: 'picture',
        mraSharable: false
    },
    order: { type: Number, required: true },
});

const validators = {
    "email": emailValidate,
    "phoneNumber": phoneValidate,
}
schema.mddsValidators = validators;

module.exports = schema;