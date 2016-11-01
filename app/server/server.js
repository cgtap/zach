var Board, Session, app, compression, exphbs, express, path, port;

express = require('express');

Session = require('express-session');

app = express();

port = 3000;

path = require('path');

app.use(Session({
  secret: 'thisisasecret'
}));

app.use(function(err, request, response, next) {
  console.log(err);
  return response.status(500).send('Something broke!');
});

app.get('/', function(request, response) {
  var b, sess;
  sess = request.session;
  return b = Board.load('./assets/boards/board_1.json', function(err, board) {
    if (err) {
      throw new Error('Bjorked');
    }
    return response.render('home', board);
  });
});

app.listen(port, function(err) {
  if (err) {
    return console.log('something bad happened', err);
  }
});

console.log("server is listening on " + port);
