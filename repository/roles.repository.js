const { Users, Roles } = require("./../models");
const builder = require("../builder");

class RolesRepository {
    ///get all role with userbyrole
    static async getAll(dbConnect) {
        //order by is important for grouping roles instance to admin and user
        let sql = `select * from users_roles order by "idRoles"`;
        let res = await dbConnect(sql);
        return builder.roles(res.rows);
    }

    // static async getById(dbConnect, id) {
    //     let sql = `select * from users_roles where "idUsers" = ${id}`;
    //     let res = await dbConnect(sql);
    //     if (res.rows.length != 1) throw new Error(`cannot find user with id=${id}`)
    //     else {
    //         let result = res.rows[0];
    //         let user = new Users();
    //         user.id = result.idUsers;
    //         user.name = result.usersName;
    //         user.roles = new Roles();
    //         user.roles.id = result.idRoles;
    //         user.roles.name = result.rolesName;
    //         return user;
    //     }
    // }
    save(dbConnect) {
        let sql = "insert into users (name,idRoles)values($1,$2)"
        return this;
    }

    update(dbConnect) {
        let sql = "UPDATE users SET name = $1, idRoles= $2"
        return this;
    }
}


module.exports = RolesRepository;