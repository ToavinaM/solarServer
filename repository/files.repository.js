const { Files, Tickets, Users, Roles } = require("../models");
const build = require("../builder")
class FilesRepository {

    static async getAll(pg) {
        let sql = `select * from tickets_users_roles_files`;
        let res = await pg(sql);
        return build.files(res.rows);
    }
    static async getByTicket(pg, idTickets) {
        let sql = `select * from tickets_users_roles_files where idTickets = $1`;
        let res = await pg(sql, [idTickets]);
        return build.files(res.rows);
    }
}


module.exports = FilesRepository;