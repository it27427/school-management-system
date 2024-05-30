const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();
const { errorHandler } = require('./middlewares/error.handler');

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const studentRouter = require('./routes/student.router');
const eventsRouter = require('./routes/events.router');

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/events', eventsRouter);

app.use((error, req, res, next) => {
  errorHandler(error, req, res, next);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>');
});

module.exports = app;
