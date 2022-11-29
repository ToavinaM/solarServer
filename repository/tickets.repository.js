const builder = require("../builder");

class TicketRepository {
    //cascade update
    static async delete(dbConnect, code) {
        try {
            let sql = `delete  from tickets where code = ${code}`;
            await dbConnect(sql);
        }
        catch (err) {
            console.log('deleteError', err);
        }
    }
    static async update(dbConnect, code) {
        try {
            let sql = "UPDATE users SET name = $1, idRoles= $2"
            await dbConnect(sql);
        }
        catch (err) {
            console.log('deleteError', err);
        }
    }

    //if I want to get reply of ticket, I put all ticket with mother  
    static async getAll(dbConnect) {
        let sql = `select * from tickets_users_roles_files`;
        let res = await dbConnect(sql);
        return builder.tickets(res.rows);
    }
    /// if idMother --> reply
    static async save(dbConnect, newTicket) {
        let sql = `insert into tickets ("idMother","code","idUsers","title", "description")values($1,$2,$3,$4,$5)`;
        let row = await dbConnect(sql, [newTicket.mother?.id, newTicket.code, newTicket.user.id, newTicket.title, newTicket.description])
        // .then()
        console.log('here', row.result);
        return newTicket;
    }

    static async getByCode(dbConnect, code) {
        let sql = `select * from tickets_users_roles_files where "code" = $1`;
        let res = await dbConnect(sql, [code]);
        if (res.rows.length != 1) throw new Error(`cannot find user with code=${code}`)
        return builder.tickets(res.rows)[0];
    }

    // update(dbConnect) {
    //     let sql = "UPDATE users SET name = $1, idRoles= $2"
    //     return this;
    // }
}


module.exports = TicketRepository;