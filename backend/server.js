const express = require('express');
const mongoose = require('mongoose');
const flowerRoutes = require('./routes/flower-routes');
const orderRoutes = require('./routes/order-routes');
const userRoutes = require('./routes/user-routes');

const PORT = 3000;
const URL = "mongodb+srv://lycoris_recoil:ohXyjXDRPY87xTTC@lycoris.msvik4v.mongodb.net/lycoris?retryWrites=true&w=majority&appName=Lycoris";

const app = express();
app.use(express.json());
app.use(flowerRoutes);
app.use(orderRoutes);
app.use(userRoutes);

mongoose
  .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});  

