const ShoppingCart = require('../models/shoppingCart');

const handleError = (res, error) => {
  res.status(500).json({ error });
}

const getShoppingCarts = (req, res) => {
    ShoppingCart
    .find()
    .sort({ title: 1 })
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const getShoppingCart = (req, res) => {
    ShoppingCart
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const deleteShoppingCart = (req, res) => {
    ShoppingCart
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const addShoppingCart = (req, res) => {
    const shoppingCart = new ShoppingCart(req.body);
    shoppingCart
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const updateShoppingCart = (req, res) => {
    ShoppingCart
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  module.exports = {
    getShoppingCarts,
    getShoppingCart,
    deleteShoppingCart,
    addShoppingCart,
    updateShoppingCart,
  };