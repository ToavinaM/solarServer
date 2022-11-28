class Roles {
    id;
    name;
    static getAll(dbConnect) {
        let sql = `select * from "roles"`;
        let rep = [];
        return rep;
    }
    static getById(dbConnect, id) {
        let sql = `select * from "roles" where id = ${id}`;
        let rep;
        return rep;
    }
}

module.exports = Roles;