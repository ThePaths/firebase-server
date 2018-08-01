
// Initialize App
const functions = require('firebase-functions');
const express = require('express');
const app = express();
app.use(express.json());

// Config
require('dotenv').config();
const CLIENT_ORIGIN = require('./config').CLIENT_ORIGIN || functions.config().client.origin;

// Dependencies
const cors = require('cors');
// const morgan = require('morgan');
const passport = require('passport');
const { dbConnect } = require('./db-mongoose');

// Authentication Strategies
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');
passport.use(localStrategy);
passport.use(jwtStrategy);

// Connect DB
dbConnect();

// Enable Cross-Origin Resource Sharing
app.use(
  cors(/*{
    origin: CLIENT_ORIGIN
  }*/)
);

app.get('/currentTime', (req, res) => {
  res.json(Date.now());
});

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/paths', require('./routes/paths'));
app.use('/userpaths', require('./routes/userpaths'));
app.use('/overview', require('./routes/overview'));
app.use('/dashboard', require('./routes/dashboard'));


// 404(Not Found) error handling
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all non-404 error handling
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

exports.app = functions.https.onRequest(app);
