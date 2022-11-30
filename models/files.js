class Files {
    id;
    filePath;
    tickets; //tickets is instance of ticket

    static getAll(dbConnect) {
        let sql = `select * from "files"`;
        let rep = [];
        return rep;
    }
    static getById(dbConnect, id) {
        let sql = `select * from "files" where id = ${id}`;
        let rep;
        return rep;
    }
    save(dbConnect) {
        let sql = `insert into "files" ("filePath","idTickets")values($1,$2)`;
        return this;
    }
}
module.exports = Files