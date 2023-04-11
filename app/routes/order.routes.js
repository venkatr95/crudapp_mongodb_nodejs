const express = require("express");
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.get("/store/:storeId", orderController.getOrderByStoreId);
router.get("/user/:userId", orderController.getOrderByUserId);
router.get("/:id", orderController.getOrderById);
router.delete("/:id", orderController.removeOrder);

module.exports = router;
