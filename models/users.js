const Roles = require("./roles");

class Users {
    id;
    name;
    roles;

    static getAll(dbConnect) {
        let sql = `select * from users_roles`;
        return new Promise((resolve, reject) => {
            // console.log('asdasdada', sql);
            dbConnect(sql, function (err, res) {
                if (err) reject(err);
                else {
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
                    resolve(rep);

                }
            });
        })
    }
    static getById(dbConnect, id) {
        let sql = `select * from users_roles where "idUsers" = ${id}`;
        return new Promise((resolve, reject) => {
            dbConnect(sql, function (err, res) {
                if (err) reject(err);
                else {
                    // console.log('asdasdada', res);
                    if (res.rows.length != 1) reject(new Error(`cannot find user with id=${id}`))
                    else {
                        let r = res.rows[0];
                        // console.log(r);
                        let u = new Users();
                        u.id = r.idUsers;
                        u.name = r.usersName;
                        u.roles = new Roles();
                        u.roles.id = r.idRoles;
                        u.roles.name = r.rolesName
                        resolve(u);
                    }

                }
            });
        })
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