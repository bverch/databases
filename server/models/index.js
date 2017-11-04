var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, results) {
        var myObj = {};
        myObj.results = results;
        callback(myObj);
      });
    }, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO messages (text, roomname, username) VALUES ("' + message.text + '","' + message.roomname + '","' + message.username + '");');
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
    post: function () {}
  }
};

