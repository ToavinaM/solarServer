const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 8090;
var http = require('http').createServer(app);
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//routes
var ticket = require('./router/TicketRouteur');
app.use('/', ticket);

http.listen(PORT, () => {
  console.log(`Serveur à l écoute de ${PORT}`)
});