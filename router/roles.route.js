const DbConnect = require("../dbConnect");
const { RolesRepository } = require("../repository");

const route = require("express").Router();

////find all users, req.query.where is optional
route.get("", async function (req, res) {
    try {
        res.send(await RolesRepository.getAll(DbConnect))
    } catch (error) {
        res.status(500).send(error.message)
    }
})
route.get("/:id", async function (req, res) {
    try {
        res.send(await RolesRepository.getById(DbConnect, [req.params.id]))
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route 