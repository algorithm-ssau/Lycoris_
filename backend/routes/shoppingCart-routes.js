const express = require('express');

const {
  getShoppingCarts, 
  getShoppingCart, 
  deleteShoppingCart,
  addShoppingCart,
  updateShoppingCart,

  getShoppingCartByUser,
} = require('../controllers/shoppingCart-controller');

const router = express.Router();

router.get('/shoppingCart', getShoppingCarts);
router.get('/shoppingCart/:id', getShoppingCart);
router.get('/shoppingCart/user/:user', getShoppingCartByUser);
router.delete('/shoppingCart/:id', deleteShoppingCart);
router.post('/shoppingCart', addShoppingCart);
router.patch('/shoppingCart/:id', updateShoppingCart);

module.exports = router;