var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs-extra');

mongoose.connect('mongodb://localhost/yts');

// var models_dir = __dirname + '/app/models';
// fs.readdirSync(models_dir).forEach(function (file) {
//     if(file[0] === '.') return; 
//     require(models_dir+'/'+ file);
// });

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./lib/routes/users')(app);
require('./lib/routes/spotify')(app);
require('./lib/routes/youtube')(app);

app.get("/", function(req, res){ 
  res.render("index", {title: "Yts"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8137, function () {
  console.log('yts app listening on port 8137!');
});


module.exports = app;
