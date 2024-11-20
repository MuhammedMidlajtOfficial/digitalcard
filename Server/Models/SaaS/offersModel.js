const mongoose = require('mongoose');

const offersSchema = mongoose.Schema({
    offerName: {
        type: String,
        require: true
    },
    offerStartDate:{
        type: Date,
        required: true
    },
    offerEndDate:{
        type: Date,
        required: true
    },
    couponCode: {
        type: String
    },
    description: {
        type: String
    }
});

const Offers = mongoose.model('Offers', offersSchema);

module.exports = Offers;