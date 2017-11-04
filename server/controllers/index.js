var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      console.log('req.url in get is: ', req.url);
      if (req.url.split('?')[0] === '/messages') {
        models.messages.get(function(data) {
          res.send(data);
        });
      } else if (req.url.split('?')[0] === '/users') {
        models.users.get(function(data) {
          res.send(data);
        });
      }
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      console.log('req.url is ', req.url);
      if (req.url === '/messages') {
        models.messages.post(req.body);
      } else if (req.url === '/users') {
        models.users.post(req.body);
      }
      res.send('Hello server received your request');
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('req', req.body);
    }
  }
};

