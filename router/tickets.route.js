const { multerHandler } = require("../config");
const query = require("../dbConnect");
const { TicketsRepository } = require("../repository");
const makeId = require('../utils');

const router = require("express").Router();
router.get("", async function (req, res) {
    try {
        res.send(await TicketsRepository.getAll(query))
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post("", async function (req, res) {
    try {
        console.log(req.body);
        req.body.code = makeId(20);
        await TicketsRepository.save(query, req.body);
        res.send(await TicketsRepository.getByCode(query, req.body.code));
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.delete("/:id", async function (req, res) {
    try {
        // console.log(req.body);
        await TicketsRepository.delete(query, +req.params.code);
        res.send({ data: 'success' });
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get("/:id", async function (req, res) {
    try {
        let tickets = await TicketsRepository.getById(query, { ticketsId: req.params.id });
        if (tickets.length == 0)
            throw new Error(`cannot find ticket with id=${req.params.id}`)
        res.send(tickets[0])
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get("/code/:code", async function (req, res) {
    try {
        let tickets = await TicketsRepository.getAll(query, { code: req.params.code });
        if (tickets.length == 0)
            throw new Error(`cannot find ticket with code=${req.params.code}`)
        res.send(tickets[0])
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get("/reply/:id", async function (req, res) {
    try {
        let tickets = await TicketsRepository.getAll(query, { idMother: req.params.id });
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error.message)
    }
})












module.exports = router 