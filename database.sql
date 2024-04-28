CREATE DATABASE todo;

CREATE TABLE todo_item(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);