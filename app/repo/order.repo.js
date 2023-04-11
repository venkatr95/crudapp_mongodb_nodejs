const Order = require("../models/order.model");

exports.orders = async () => {
    const orders = await Order.find();
    return orders;
};
exports.orderById = async id => {
    const order = await Order.findById(id);
    return order;
}
exports.orderByUserId = async userId => {
    const order = await Order.
    find().
    where('userId').equals(userId);
    return order;
}
exports.orderByStoreId = async storeId => {
    const order = await Order.
    find().
    where('storeId').equals(storeId);
    return order;
}
exports.createOrder = async payload => {
    const newOrder = await Order.create(payload);
    return newOrder
}
exports.removeOrder = async id => {
    const order = await Order.findByIdAndRemove(id);
    return order
}
