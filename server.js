const app = require('./app');
const config = require('./config/config');
require('colors');

// const PORT = config.app.port;
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at http://localhost:${PORT}`.bgBrightCyan
  );
});
