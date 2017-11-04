var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      res.end('Hello world!');
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

