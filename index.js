const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 8090;
const path = require("path");

app.use('/uploads', express.static(path.join(__dirname, "uploads")));
app.use(express.raw());
var http = require('http').createServer(app);
//
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//routes
const { UsersRouter, RolesRouter, TicketsRouter, FilesRouter } = require("./router")
app.use("/user", UsersRouter);
app.use("/ticket", TicketsRouter);
app.use("/role", RolesRouter);
app.use("/file", FilesRouter);
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build', "static")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
http.listen(PORT, () => {
  console.log(`Serveur à l écoute de ${PORT}`)
});
