const mongoose = require('mongoose');
const collectionName = 'orders';

const orderSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        prodDetail: {
            type: Map,
            default: {},
            required: true
        },
        userId: {
            type: String,
            default: '',
            required: true
        },
        storeId: {
            type: String,
            default: '',
            required: true
        },
        orderPrice: {
            type: String,
            default: '',
            required: true
        },
        status: {
            type: String,
            default: "Not processed",
            enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
            required: true
        }
    },
    { collection: collectionName, versionKey: false }); // timestamps = true can be added

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
