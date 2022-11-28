const Roles = require("./roles");

class Users {
    id;
    name;
    roles;

    static async getAll(dbConnect) {
        let sql = `select * from users_roles`;
        let res = await dbConnect(sql)
        let rep = [];
        // console.log('asdasdada', res);
        for (let r of res.rows || []) {
            // console.log(r);
            let u = new Users();
            u.id = r.idUsers;
            u.name = r.usersName;
            u.roles = new Roles();
            u.roles.id = r.idRoles;
            u.roles.name = r.rolesName
            rep.push(u)
        }
        return rep;

    }

    static async getById(dbConnect, id) {
        let sql = `select * from users_roles where "idUsers" = ${id}`;
        let res = await dbConnect(sql);
        if (res.rows.length != 1) throw new Error(`cannot find user with id=${id}`)
        else {
            let r = res.rows[0];
            let u = new Users();
            u.id = r.idUsers;
            u.name = r.usersName;
            u.roles = new Roles();
            u.roles.id = r.idRoles;
            u.roles.name = r.rolesName;
            return u;
        }
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