const express = require('express');

const {
  upload,
  getFlowers, 
  getFlower, 
  deleteFlower,
  addFlower,
  updateFlower,
  uploadFlowerImage,
} = require('../controllers/flower-controller');

const router = express.Router();

router.get('/flower', getFlowers);
router.get('/flower/:id', getFlower);
router.delete('/flower/:id', deleteFlower);
router.post('/flower', upload.single('image'), addFlower);
router.patch('/flower/:id', upload.single('image'), updateFlower);
router.patch('/upload', upload.single('image'), uploadFlowerImage);

module.exports = router;