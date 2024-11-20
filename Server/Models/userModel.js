const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
    },
    dateOfBirth: {
        type: mongoose.Schema.Types.Date,
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: 'String',
        enum: ['ADMIN'],
        default: 'ADMIN'
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;