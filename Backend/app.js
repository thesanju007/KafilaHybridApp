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

const token = require('./api/token');
// const verifyToken = require('./api/routes/verifyToken');
 const flight = require('./api/flight');
// const AVLT = require('./api/routes/AVLT');


app.use('/API/AUTH', token);
// app.use('/API/VERIFY', verifyToken);
app.use('/API/FLIGHT', flight);
// app.use('/API/AVLT', AVLT);

// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = (404);
//   next(error);
// })

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   });
// });

module.exports = app;
