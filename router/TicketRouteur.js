const route = require('express').Router();
const Mapping = require('../models/Mapping');
////////////////////ill add file this night
route.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let sql = `SELECT * from "Tickets"`;
    Mapping.execute(sql).then(rep => {
        return res.send(rep.rows);
    }).catch(error => {
        return res.send({ error });
    })
})

route.post('/add', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let idMother = req.body.idMother;
    let code = req.body.code;
    let status = req.body.status;
    let createdAt = req.body.createdAt;
    let idUsers = req.body.idUsers;

    let sql = `
        INSERT INTO public."Tickets"("idMother",code,status,"createdAt","idUsers")
        VALUES(${idMother},'${code}',${status},${createdAt},${idUsers});
    `;
    Mapping.execute(sql).then(rep => {
        return res.send(rep);
    }).catch(error => {
        return res.send({ error });
    })
})

route.put('/update', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let code = req.body.code; ////////need to be params
    let title = req.body.title;
    let status = req.body.status;

    let sql = `
      UPDATE public."Tickets"
	    SET status=${status}, title='${title}'
	    WHERE code = '${code}';
    `;
    console.log(sql);
    Mapping.execute(sql).then(rep => {
        return res.send(rep);
    }).catch(error => {
        return res.send({ error });
    })
})

module.exports = route;