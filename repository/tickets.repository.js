const builder = require("../builder");

const { filter } = require('../utils');
class TicketRepository {
    //cascade update
    static delete(dbConnect, code) {
        let sql = `delete  from tickets where "code" = $1`;
        return dbConnect(sql, [code]);
    }
    static update(dbConnect, tickets) {
        let sql = `UPDATE tickets SET "description" = $1, "status"= $2 ,"title"=$3 where id=$4`
        return dbConnect(sql, [tickets.description, tickets.status, tickets.title, tickets.id]);
    }

    //if I want to get reply of ticket, I put all ticket with mother  
    static async getAll(dbConnect, whereObject) {
        let sql = `select * from tickets_users_roles_files where 1=1 `;
        const { condition, value } = filter(whereObject);
        let res = await dbConnect(sql + condition, value)
        return builder.tickets(res.rows);
    }
    /// if idMother --> reply
    static async save(dbConnect, newTicket) {
        let sql = `insert into tickets ("idMother","code","idUsers","title", "description")values($1,$2,$3,$4,$5)`;
        let row = await dbConnect(sql, [newTicket.mother?.id, newTicket.code, newTicket.users.id, newTicket.title, newTicket.description])
        // .then()
        console.log('here', row.result);
        return newTicket;
    }

    static async getByCode(dbConnect, code) {
        let res = getAll(dbConnect, { code: code });
        if (res.length != 1)
            throw new Error(`cannot find Ticket with code =${code}`)
        return res[0]
    }
    static async getById(dbConnect, id) {
        let res = getAll(dbConnect, { idTickets: id });
        if (res.length != 1)
            throw new Error(`cannot find Ticket with id =${id}`)
        return res[0]
    }
    // update(dbConnect) {
    //     let sql = "UPDATE users SET name = $1, idRoles= $2"
    //     return this;
    // }
}


module.exports = TicketRepository;