const User = require('../models/user');

const handleError = (res, error) => {
  res.status(500).json({ error });
}

const getUsers = (req, res) => {
    User
    .find()
    .sort({ title: 1 })
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const getUser = (req, res) => {
    User
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const deleteUser = (req, res) => {
    User
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const addUser = (req, res) => {
    const user = new User(req.body);
    user
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const updateUser = (req, res) => {
    User
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch((err) => handleError(res, err));
  };
  
  const checkUserExists = (req, res) => {
    const email = req.body.email;
    User
    .findOne({ email: email })
    .then((result) => {
        if (result) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    })
    .catch((err) => handleError(res, err));
  };

  const findUserByEmail = (req, res) => {
    const email = req.params.email;
    User
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        res.status(200).json({ password: user.password });
      } else {
        res.status(404).json({ message: 'Пользователь не найден' });
      }
    })
    .catch((err) => handleError(res, err));
  };
  
  module.exports = {
    getUsers,
    getUser,
    deleteUser,
    addUser,
    updateUser,
    checkUserExists,
    findUserByEmail,
  };