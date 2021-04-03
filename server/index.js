const express = require('express');
const path = require('path');
const db = require('../db/index.js')
const router = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
