const { Files, Tickets, Users, Roles } = require("../models");
const builder = require("../builder");
const { filter } = require('../utils');
class FilesRepository {

    static async getAll(dbConnect, whereObject) {
        let sql = `select * from tickets_users_roles_files where 1=1 `;
        const { condition, value } = filter(whereObject);
        let res = await dbConnect(sql + condition, value)
        return builder.files(res.rows);
    }
    static getByTicket(dbConnect, idTickets) {
        return this.getAll(dbConnect, { idTickets: idTickets })
    }
    static async update(dbConnect, files) {
        let sql = `UPDATE files set "deleted"=$1 where "idFiles"=$2`
        return await dbConnect(sql, [files.deleted, files.id])
    }
    static async getById(dbConnect, id) {
        let res = this.getAll(dbConnect, { idFiles: id })
        if (res.length != 0)
            throw new Error(`cannot find File with id=${id}`);
        return res[0];
    }
    static deleteOrRestore(dbConnect, files) {
        // let files=await this.getByTicket(dbConnect,idTickets)
        // for(let f of files||[]){
        f.deleted = !f.deleted;
        return this.update(dbConnect, f)
        // }
    }
    static async save(dbConnect, files) {
        let sql = `INSERT INTO files ("idTickets","filesPath") values ($1,$2) `
        return dbConnect(sql, [files.id, files.path])
    }
}


module.exports = FilesRepository;