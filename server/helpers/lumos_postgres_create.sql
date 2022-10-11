SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', 'public', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE users (
    "user_id" serial PRIMARY KEY,
	"email" varchar (320) NOT NULL UNIQUE,
    "password" varchar (50) NOT NULL,
)