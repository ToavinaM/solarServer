\ c postgres;

drop database solar;

create database solar;

\ c solar;

drop table roles cascade;

CREATE TABLE roles (
    "id" SERIAL,
    "name" VARCHAR(50) NOT NULL,
    PRIMARY KEY ("id")
);

drop table users cascade;

CREATE TABLE users (
    "id" SERIAL,
    "name" VARCHAR(50),
    "idRoles" INTEGER NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("idRoles") REFERENCES roles ("id")
);

drop table tickets cascade;

CREATE TABLE tickets (
    "id" SERIAL,
    "idMother" INTEGER NULL,
    "code" VARCHAR(20) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATE NOT NULL DEFAULT NOW(),
    "idUsers" INTEGER NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("idUsers") REFERENCES users("id")
);

CREATE TABLE files(
    "id" SERIAL,
    "filesPath" VARCHAR(100),
    "idTickets" INTEGER,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("idTickets") REFERENCES tickets("id")
);