var Board, Session, app, compression, exphbs, express, path, port;

express = require('express');

Session = require('express-session');

app = express();

port = process.env.PORT || 3000;

path = require('path');

console.log("server is listening on " + port);
