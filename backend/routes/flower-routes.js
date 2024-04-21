const express = require('express');

const {
  getFlowers, 
  getFlower, 
  deleteFlower,
  addFlower,
  updateFlower,
} = require('../controllers/flower-controller');

const router = express.Router();

router.get('/flower', getFlowers);
router.get('/flower/:id', getFlower);
router.delete('/flower/:id', deleteFlower);
router.post('/flower', addFlower);
router.patch('/flower/:id', updateFlower);

module.exports = router;