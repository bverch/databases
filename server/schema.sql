CREATE DATABASE chat;

USE chat;

-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   username VARCHAR(20)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(100),
  roomname VARCHAR(20),
  username VARCHAR(20)
  -- FOREIGN KEY (userid) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

