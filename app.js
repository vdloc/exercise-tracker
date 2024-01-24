
const db = require('./database');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const usersRouter = require('./routes/user.js');
function onDatabaseConnect() {
  app.use(cors());
  app.use(express.static('public'));
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

  app.use('/users', usersRouter);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

function start() {
  db.connect(onDatabaseConnect, (error) => {
    console.log(error);
    process.exit(1);
  })
}

module.exports = {
  start
}
