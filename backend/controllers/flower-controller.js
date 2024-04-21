const Flower = require('../models/flower');

const handleError = (res, error) => {
  res.status(500).json({ error });
}

const getFlowers = (req, res) => {
    Flower
    .find()
    .sort({ title: 1 })
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const getFlower = (req, res) => {
    Flower
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const deleteFlower = (req, res) => {
    Flower
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const addFlower = (req, res) => {
    const flower = new Flower(req.body);
    flower
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const updateFlower = (req, res) => {
    Flower
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  module.exports = {
    getFlowers,
    getFlower,
    deleteFlower,
    addFlower,
    updateFlower,
  };