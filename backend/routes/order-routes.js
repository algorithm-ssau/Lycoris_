const express = require('express');

const {
  getOrders, 
  getOrder, 
  deleteOrder,
  addOrder,
  updateOrder,
} = require('../controllers/order-controller');

const router = express.Router();

router.get('/order', getOrders);
router.get('/order/:id', getOrder);
router.delete('/order/:id', deleteOrder);
router.post('/order', addOrder);
router.patch('/order/:id', updateOrder);

module.exports = router;