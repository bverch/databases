var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT text, roomname, username FROM messages INNER JOIN users ON messages.userid=users.id', function(err, results) {
        var myObj = {};
        myObj.results = results;
        callback(myObj);
      });
    }, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO users (username) VALUES ("' + message.username + '");', function() {
        db.query('INSERT INTO messages (text, roomname, userid) VALUES ("' + message.text + '","' + message.roomname + '",'
         + '(SELECT id FROM users WHERE username="' + message.username + '"));');

      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', function(err, results) {
        var myObj = {};
        myObj.results = results;
        callback(myObj);
      });
    },
    post: function (username) {
      db.query('INSERT INTO users (username) VALUES ("' + username.username + '");');
    }
  }
};

