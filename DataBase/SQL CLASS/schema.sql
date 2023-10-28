-- Active: 1680260576962@@127.0.0.1@3306@delta_app
SHOW TABLES;

CREATE Table user (
    id varchar(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

SELECT * from user;

TRUNCATE TABLE user;

SELECT * from user;

TRUNCATE TABLE user;

SELECT * from user;