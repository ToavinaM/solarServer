class Tickets {
    id;
    code;
    mother; //mother is a parent ticket
    status;
    users; //users is Users instance
    files; //files is Array of documets

    static getAll(dbConnect) {
        let sql = `select * from tickets`;
        let rep = [];
        return rep;
    }
    static getById(dbConnect, id) {
        let sql = `select * from tickets where id = ${id}`;
        let rep;
        return rep;
    }
    save(dbConnect) {
        let sql = `insert into tickets ("code","idMother","idUsers")values($1,$2,$3)`;
        return this;
    }

    update(DbConnect) {
        let sql = `UPDATE tickets SET "code" = $1,"status" = $2,"idMother" = $3`;
        return this;
    }
}
module.exports = Tickets;