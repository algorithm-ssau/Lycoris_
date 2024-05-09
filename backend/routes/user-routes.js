const express = require('express');

const {
  getUsers, 
  getUser, 
  deleteUser,
  addUser,
  updateUser,
  checkUserExists,
} = require('../controllers/user-controller');

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);
router.post('/user/exists', checkUserExists);


module.exports = router;