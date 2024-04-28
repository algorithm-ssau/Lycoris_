const Flower = require('../models/flower');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'flowers');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

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
    /*const flowerData = req.body;
    if (req.file) {
      flowerData.image = '/flowers' + req.file.originalname;
    }
    const flower = new Flower(flowerData);*/
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
    /*const flowerData = req.body;
    if (req.file) {
      flowerData.image = '/flowers' + req.file.originalname;
    }
    const flower = new Flower(FlowerData);*/
    Flower
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };

  /*not used yet
  const uploadFlowerImage = (req, res) => {
    res.json({
      url:  '/flowers' + req.file.originalname,
    });
  }
  */
  
  module.exports = {
    getFlowers,
    getFlower,
    deleteFlower,
    addFlower,
    updateFlower,
    //uploadFlowerImage,
  };