const Order = require('../models/order');

const handleError = (res, error) => {
  res.status(500).json({ error });
}

const getOrders = (req, res) => {
    Order
    .find()
    .sort({ title: 1 })
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const getOrder = (req, res) => {
    Order
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const deleteOrder = (req, res) => {
    Order
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const addOrder = (req, res) => {
    const order = new Order(req.body);
    order
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const updateOrder = (req, res) => {
    Order
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  module.exports = {
    getOrders,
    getOrder,
    deleteOrder,
    addOrder,
    updateOrder,
  };