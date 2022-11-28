CREATE TABLE public."Tickets" (
    id integer,
    "idMother" integer,
    code character varying NOT NULL,
    status boolean NOT NULL,
    "createdAt" time without time zone,
    "idUsers" integer NOT NULL,
    PRIMARY KEY (id)
) WITH (OIDS = FALSE);

ALTER TABLE
    public."Tickets" OWNER to postgres;

CREATE TABLE public.roles (
    id integer NOT NULL DEFAULT nextval('roles_id_seq' :: regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE pg_default;

ALTER TABLE
    public.roles OWNER to postgres;

CREATE TABLE public.users (
    id integer NOT NULL DEFAULT nextval('users_id_seq' :: regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    "idRoles" integer NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT "idRoles" FOREIGN KEY ("idRoles") REFERENCES public.roles (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
) WITH (OIDS = FALSE) TABLESPACE pg_default;

ALTER TABLE
    public.users OWNER to postgres;

-- ////////////////////////insert
-- users
INSERT INTO
    public.users(id, name, "idRoles")
VALUES
    (?, ?, ?);

-- roles/
INSERT INTO
    public.roles(id, name)
VALUES
    (?, ?);

-- //user
INSERT INTO
    public.users(name, "idRoles")
VALUES
    ('JeanAdmin', 1);

INSERT INTO
    public.users(name, "idRoles")
VALUES
    ('MarieUser', 2);

-- //tickets
INSERT INTO
    public."Tickets"(
        "idMother",
        code,
        title,
        status,
        "createdAt",
        "idUsers"
    )
VALUES
    (
        null,
        'ticket21hsd',
        'tilteOfMytickets',
        false,
        now(),
        1
    );