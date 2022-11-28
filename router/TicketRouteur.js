const route = require('express').Router();
const Mapping = require('../models/Mapping');

route.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let sql = `SELECT * from "Tickets"`;
    Mapping.execute(sql).then(rep => {
        return res.send(rep.rows);
    }).catch(error => {
        return res.send({ error });
    })
})

// route.post('/add', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');


//     let debut = req.body.DEBUT;


//     let sql = `INSERT INTO tickets(id_ticket,id_groupe,id_Priority,titre,debut,fin) value( '${debut}')`;


//     Mapping.execute(sql).then(rep => {
//         return res.send({ ticket: rep });
//     }).catch(error => {
//         return res.send({ error });
//     })
// })

module.exports = route;