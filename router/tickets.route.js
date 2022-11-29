const { multerHandler } = require("../config");
const query = require("../dbConnect");
const { TicketsRepository, FilesRepository } = require("../repository");
const { makeId } = require('../utils');
const { where } = require('../utils');
const router = require("express").Router();
router.get("", async function (req, res) {
    try {
        const whereObject = where(req.query.where);
        res.send(await TicketsRepository.getAll(query, whereObject));
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("", multerHandler, async function (req, res) {
    try {
        // fileSolar

        console.log(req.file);
        req.body.code = makeId(20);

        await TicketsRepository.save(query, req.body);
        const newTicket = await TicketsRepository.getByCode(query, req.body.code)
        for (let f of req.files || []) {
            let newFiles = new Files();
            newFiles.filesPath = f.path;
            newFiles.ticket = newTicket;
            await FilesRepository.save(query, newFiles);
        }

        res.send(await TicketsRepository.getByCode(query, req.body.code));
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.delete("/:code", async function (req, res) {
    try {
        // console.log(req.body);
        await TicketsRepository.delete(query, req.params.code);
        res.send({ data: 'success' });
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get("/:id", async function (req, res) {
    try {
        res.send(await TicketsRepository.getById(query, +req.params.id))
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get("/code/:code", async function (req, res) {
    try {
        res.send(await TicketsRepository.getByCode(query, req.params.code))
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