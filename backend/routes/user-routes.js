const express = require('express');

const {
  getUsers, 
  getUser, 
  deleteUser,
  addUser,
  updateUser,
  checkUserExists,
  findUserByEmail,
} = require('../controllers/user-controller');

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);
router.post('/user/exists', checkUserExists);
router.post('/user/email', findUserByEmail);


module.exports = router;