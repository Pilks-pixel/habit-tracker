DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    user_name varchar(100) NOT NULL,
    email varchar(100),
    user_password varchar(100) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    habit_id serial PRIMARY KEY,
    habit_name varchar(100) NOT NULL
    );

DROP TABLE IF EXISTS habit_plans;

CREATE TABLE habit_plans (
    hplan_id serial PRIMARY KEY,
    user_id int NOT NULL,
    habit_id int NOT NULL,
    begin_date date NOT NULL DEFAULT CURRENT_DATE,
    end_date date NOT NULL DEFAULT '2099-01-01',
    frequency int
    );

DROP TABLE IF EXISTS habit_facts;

CREATE TABLE habit_facts (
    hfact_id serial PRIMARY KEY,
    hplan_id int NOT NULL,
    hfact_timestamp datetime);






