const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>');
});

module.exports = app;
