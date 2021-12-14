const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }

    }
);


module.exports = mongoose.model('Order',OrderSchema, 'orders');