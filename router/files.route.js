const DbConnect = require("../dbConnect");
const { FilesRepository } = require("../repository");

const route = require("express").Router();

////find all users, req.query.where is optional
route.get("", async function (req, res) {
    try {
        res.send(await FilesRepository.getAll(DbConnect,))
    } catch (error) {
        res.status(500).send(error.message)
    }
});

route.get("/:idTickets", async function (req, res) {
    try {
        res.send(await FilesRepository.getByTicket(DbConnect, req.params.idTickets));
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = route 