var Board, Session, app, compression, exphbs, express, path, port;

express = require('express');

Session = require('express-session');

app = express();

port = process.env.PORT || 3000;

path = require('path');

process.env.PWD = process.cwd();

app.use(Session({
  secret: 'thisisasecret'
}));

app.use(express.static(path.join(__dirname, '../../public')));

app.use(function(err, request, response, next) {
  console.log(err);
  return response.status(500).send('Something broke!');
});

app.listen(port, function(err) {
  if (err) {
    return console.log('something bad happened', err);
  }
});

console.log("server is listening on " + port);
