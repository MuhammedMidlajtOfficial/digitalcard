const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    planName: {
        type: String,
    },
    otpions: [{
        optionType: {
            type: String,
            required: true,
            enum: ['BOOLEAN', 'NUMERIC', 'STRING']
        },
        optionName: {
            type: String,
            required: true
        },
        optionValue: {
            type: String,
            required: true
        }
    }],
    currentPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'IN-ACTIVE']
    }
}, { timestamps: true });

const Plans = mongoose.model('Plans', planSchema);