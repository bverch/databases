var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      var dummyData = { 'results': [{'username': 'fred', 'roomname': 'floor7', 'text': 'yo'}] };
      models.messages.get(function(data) {
        res.send(data);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('We are receiving a method :', req.method, ' from url :', req.url);
      console.log('req', req.body);
      models.messages.post(req.body);
      //console.log('our req', req);
      
      // var data = '';
      // req.on('data', function(chunk) {

      //   data += chunk;
      // });
      // req.on('end', function() {
      //   console.log('received our data! :', data);
      //   res.send('received data');
      // });
      
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

