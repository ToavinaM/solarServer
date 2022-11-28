class Users {
    id;
    name;
    roles;

    static getAll(dbConnect) {
        let sql = `select * from users`;
        let rep = [];
        return rep;
    }
    static getById(dbConnect, code) {
        let sql = `select * from users where code = ${code}`;
        let rep;
        return rep;
    }
    save(dbConnect) {
        let sql = "insert into users (name,idRoles)values($1,$2)"
        return this;
    }

    update(DbConnect) {
        let sql = "UPDATE users SET name = $1, idRoles= $2"
        return this;
    }
}

module.exports = Users;