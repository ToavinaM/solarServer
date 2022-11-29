const { Users, Roles } = require("./../models");
const builder = require("../builder");

class UsersRepository {

    static async getAll(dbConnect) {
        let sql = `select * from users_roles`;
        let res = await dbConnect(sql)
        return builder.users(res.rows);

    }


    //get instance of user and role
    static async getById(dbConnect, id) {
        let sql = `select * from users_roles where "idUsers" = ${id}`;
        let res = await dbConnect(sql);
        if (res.rows.length != 1) throw new Error(`cannot find user with id=${id}`)
        else {
            let result = res.rows[0];
            let user = new Users();
            user.id = result.idUsers;
            user.name = result.usersName;
            user.roles = new Roles();
            user.roles.id = result.idRoles;
            user.roles.name = result.rolesName;
            return user;
        }
    }
    save(dbConnect) {
        let sql = "insert into users (name,idRoles)values($1,$2)"
        return this;
    }

    update(dbConnect) {
        let sql = "UPDATE users SET name = $1, idRoles= $2"
        return this;
    }
}


module.exports = UsersRepository;