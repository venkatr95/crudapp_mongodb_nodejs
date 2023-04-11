const mongoose = require("mongoose");
const orderRepository = require('../repo/order.repo')

exports.createOrder = async (req, res) => {
  try {
    if(!req.body) {
      return res.status(400).send({
        message: "Order content can not be empty"
      });
    }
    let payload = {
      _id: new mongoose.Types.ObjectId(),
      prodDetail: req.body.prodDetail,
      userId: req.body.userId,
      storeId: req.body.storeId,
      orderPrice: req.body.orderPrice,
      status: req.body.status
    }
    let order = await orderRepository.createOrder({
      ...payload
    });
    res.status(200).json({
      status: true,
      data: order,
      type: "POST",
      url: "http://localhost:3000/orders/" + order._id
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err,
      status: false,
    })
  }
}

exports.getOrders = async (req, res) => {
  try {
    let orders = await orderRepository.orders();
    res.status(200).json({
      status: true,
      data: orders,
      type: "GET"
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err,
      status: false
    })
  }
}

exports.getOrderById = async (req, res) => {
  try {
    let id = req.params.id
    let orderDetails = await orderRepository.orderById(id);
    res.status(200).json({
      status: true,
      data: orderDetails,
      type: "GET",
      url: "http://localhost:3000/orders/" + orderDetails._id
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err
    })
  }
}

exports.getOrderById = async (req, res) => {
  try {
    let id = req.params.id
    console.log(id)
    let orderDetails = await orderRepository.orderById(id);
    res.status(200).json({
      status: true,
      data: orderDetails,
      type: "GET",
      url: "http://localhost:3000/orders/" + orderDetails._id
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err
    })
  }
}

exports.getOrderByStoreId = async (req, res) => {
  try {
    let id = req.params.storeId
    let orderDetails = await orderRepository.orderByStoreId(id);
    console.log(orderDetails)
    res.status(200).json({
      status: true,
      data: orderDetails,
      type: "GET"
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err
    })
  }
}

exports.getOrderByUserId = async (req, res) => {
  try {
    let id = req.params.userId
    let orderDetails = await orderRepository.orderByUserId(id);
    res.status(200).json({
      status: true,
      data: orderDetails,
      type: "GET"
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err
    })
  }
}

exports.removeOrder = async (req, res) => {
  try {
    let id = req.params.id
    let orderDetails = await orderRepository.removeOrder(id)
    res.status(200).json({
      status: true,
      data: orderDetails,
      type: "DELETE",
      url: "http://localhost:3000/orders/" + orderDetails._id
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err
    })
  }
}

