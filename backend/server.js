const express = require('express');
const cors = require('cors')

const mongoose = require('mongoose');
const flowerRoutes = require('./routes/flower-routes');
const orderRoutes = require('./routes/order-routes');
const userRoutes = require('./routes/user-routes');
const userShoppingCarts = require('./routes/shoppingCart-routes');

const PORT = 3001;
const URL = "mongodb+srv://lycoris_recoil:ohXyjXDRPY87xTTC@lycoris.msvik4v.mongodb.net/lycoris?retryWrites=true&w=majority&appName=Lycoris";

const app = express();
// Use CORS before other app.use's because else CORS won't work
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  optionSuccessStatus:200
}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use(express.json());
app.use(flowerRoutes);
app.use(orderRoutes);
app.use(userRoutes);
app.use(userShoppingCarts);


mongoose
  .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});  

