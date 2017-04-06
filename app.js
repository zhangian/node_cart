var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//引用模块
var mongoose=require('mongoose');
var multer=require('multer');
var session=require('express-session');
var app = express();

// 路由
var routes = require('./routes/index');
var users = require('./routes/users');
var login=require('./routes/login');
var register=require('./routes/register');
var userRegister=require('./routes/user_register')

// console.log(path)

var template=require('ejs');

global.dbs=require('./dbs/dbs.js');
global.db=mongoose.connect('mongodb://127.0.0.1:27017/node_wechat');

// console.log(global.db)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.engine('.html', template.__express)
// app.set('view engine', 'ejs');
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret:'secret',
    name:'cartSession',
    cookie:{
      maxAge:1000*60*30
    },
    resave:false,
    saveUninitialized:true
}));


app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);
app.use('/userRegister', userRegister)

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



module.exports = app;
