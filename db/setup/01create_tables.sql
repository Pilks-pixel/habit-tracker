DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_digest VARCHAR(500) NOT NULL 
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_name varchar(100) NOT NULL
    );

DROP TABLE IF EXISTS habit_plans;

CREATE TABLE habit_plans (
    id serial PRIMARY KEY,
    user_id int NOT NULL,
    habit_id int NOT NULL,
    begin_date date NOT NULL DEFAULT CURRENT_DATE,
    end_date date NOT NULL DEFAULT '2099-01-01',
    frequency int
    );

DROP TABLE IF EXISTS habit_facts;

CREATE TABLE habit_facts (
    id serial PRIMARY KEY,
    hplan_id int NOT NULL,
    hfact_timestamp timestamp);






