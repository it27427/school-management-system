const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const { errorHandler } = require('./middlewares/error.handler');

const studentRouter = require('./routes/student.router');
const eventRouter = require('./routes/event.router');
const libraryRouter = require('./routes/library.router');
const announcementRouter = require('./routes/announcement.router');
const assignmentRouter = require('./routes/assignment.router');
const attendanceRouter = require('./routes/attendance.router');
const classRouter = require('./routes/class.router');

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/library', libraryRouter);
app.use('/api/v1/performance', announcementRouter);
app.use('/api/v1/assignment', assignmentRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/classes', classRouter);

app.use((error, req, res, next) => {
  errorHandler(error, req, res, next);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>');
});

module.exports = app;
