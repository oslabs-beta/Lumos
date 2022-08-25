SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', 'public', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;
-- 
CREATE TABLE users (
	"_id" serial NOT NULL,
	"email" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,

	CONSTRAINT "users_pk" PRIMARY KEY ("_id") 
    
) WITH (
  OIDS=FALSE
);

-- INSERT INTO users (email, password, firstname, lastname, arn) VALUES ('addyac2', 'lol', 'wow', 'annoyed', '12375555748439');


/*
psql -d <DATABASE URL> -f lumos_postgres_create.sql
*/

--  psql -d postgres://hqtdaxpj:QBKrOx1TsD79gVw-GSLQ89b335iqReba@chunee.db.elephantsql.com/hqtdaxpj -f server/lumos_postgres_create.sql

