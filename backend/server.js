const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Flower = require('./models/flower');
const Order = require('./models/order');
const User = require('./models/user');

const PORT = 3000;
const URL = "mongodb://localhost:27017/lycoris_";

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});  

const handleError = (res, error) => {
  res.status(500).json({ error });
}

// flower request
{
app.get('/flower', (req, res) => {
  Flower
    .find()
    .sort({ title: 1 })
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get('/flower/:id', (req, res) => {
  Flower
  .findById(req.params.id)
  .then((result) => {
    res
      .status(200)
      .json(result);
  })
  .catch(() => handleError(res, "Something goes wrong..."));
});

app.delete('/flower/:id', (req, res) => {
  Flower
  .findByIdAndDelete(req.params.id)
  .then((result) => {
    res
      .status(200)
      .json(result);
  })
  .catch(() => handleError(res, "Something goes wrong..."));
});

app.post('/flower', (req, res) => {
  const flower = new Flower(req.body);
  flower
  .save()
  .then((result) => {
    res
      .status(201)
      .json(result);
  })
  .catch(() => handleError(res, "Something goes wrong..."));
});

app.patch('/flower/:id', (req, res) => {
  Flower
  .findByIdAndUpdate(req.params.id, req.body)
  .then((result) => {
    res
      .status(200)
      .json(result);
  })
  .catch(() => handleError(res, "Something goes wrong..."));
});
}

// order request
{
  app.get('/order', (req, res) => {
    Order
      .find()
      .sort({ title: 1 })
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.get('/order/:id', (req, res) => {
    Order
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.delete('/order/:id', (req, res) => {
    Order
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.post('/order', (req, res) => {
    const flower = new Order(req.body);
    flower
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.patch('/order/:id', (req, res) => {
    Order
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
}

// user request
{
  app.get('/user', (req, res) => {
    User
      .find()
      .sort({ title: 1 })
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.get('/user/:id', (req, res) => {
    User
    .findById(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.delete('/user/:id', (req, res) => {
    User
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.post('/user', (req, res) => {
    const flower = new User(req.body);
    flower
    .save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
  
  app.patch('/user/:id', (req, res) => {
    User
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  });
}