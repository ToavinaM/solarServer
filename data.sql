insert into
    roles ("name")
values
    ('user');

insert into
    roles ("name")
values
    ('admin');

insert into
    users ("name", "idRoles")
values
    ('Toavina', 1),
    ('John', 1),
    ('Lise', 2);

insert into
    tickets ("code", "idUsers")
values
    ('XS123h', 1);