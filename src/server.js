const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

const route = require('./routers');
const db = require('./db');

db.connect();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})