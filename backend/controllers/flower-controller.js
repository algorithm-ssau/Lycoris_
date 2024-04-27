const Flower = require('../models/flower');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
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
    const flower = new Flower(req.body);
    Flower
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const updateFlower = (req, res) => {
    const flower = new Flower(req.body);
    Flower
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };

  const uploadFlowerImage = (req, res) => {
    res.json({
      url:  '/uploads/' + req.file.originalName,
    });
  }
  
  module.exports = {
    upload,
    storage,
    getFlowers,
    getFlower,
    deleteFlower,
    addFlower: [upload.single('image'), addFlower],
    updateFlower: [upload.single('image'), updateFlower],
    uploadFlowerImage,
  };