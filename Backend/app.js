const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
  next();
});


 const mApi = require('./api/API');
;
app.use('/API/CC', mApi);


module.exports = app;
