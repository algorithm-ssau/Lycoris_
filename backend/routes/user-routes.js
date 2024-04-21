const express = require('express');

const {
  getUsers, 
  getUser, 
  deleteUser,
  addUser,
  updateUser,
} = require('../controllers/user-controller');

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);

module.exports = router;