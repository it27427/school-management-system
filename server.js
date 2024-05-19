const app = require('./app');
const config = require('./config/config');
const colors = require('colors');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is successfully listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`.bgBrightCyan);
});
