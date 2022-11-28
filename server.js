const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 8090;
var http = require('http').createServer(app);
//
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//routes
var ticket = require('./router/TicketRouteur');
app.use('/ticket', ticket);

http.listen(PORT, () => {
  console.log(`Serveur à l écoute de ${PORT}`)
});