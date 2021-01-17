const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const normalizePort = require('normalize-port');

const app = express();
const port = normalizePort(process.env.PORT || '3000');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(port);