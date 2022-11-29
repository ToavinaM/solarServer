const { Tickets, Users, Roles, Files } = require("../models");

function buildTicket(rows) {
    let id = 0;
    let ticket;
    let rep = [];

    for (let row of rows || []) {
        if (row.idTickets !== id) {
            ticket = new Tickets();
            ticket.users = new Users();
            ticket.users.roles = new Roles();
            ticket.files = [];
            if (row.idMother) {
                ticket.mother = new Tickets();
                ticket.mother.id = row.idMother;
            }
        }
        ticket.id = row.idTickets;
        ticket.title = row.title;
        ticket.description = row.description;
        ticket.code = row.code;
        ticket.status = row.status;
        ticket.users.id = row.idUsers;
        ticket.users.name = row.usersName;
        ticket.users.roles.id = row.idRoles;
        ticket.users.roles.name = row.rolesName;

        if (row.idFiles) {
            console.log(row);
            let files = new Files();
            files.id = row.idFiles;
            files.filesPath = row.filesPath;
            ticket.files.push(files);
        }
        //console.log(ticket);
        if (!rep.includes(ticket))
            rep.push(ticket)
    }
    return rep;
}
module.exports = buildTicket;