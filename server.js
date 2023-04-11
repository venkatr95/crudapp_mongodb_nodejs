const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// import routes
const orderRoutes = require('./app/routes/order.routes');

// app
const app = express();
// db
const url = `mongodb+srv://vivikart22:${process.env.DB_PASS}@cluster0.5gri9xk.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url).then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use("/orders", orderRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`order-service started on port ${port}.`);
});

module.exports = app;
