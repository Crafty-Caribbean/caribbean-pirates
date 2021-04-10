const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/api', router);
app.use('/*', express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
