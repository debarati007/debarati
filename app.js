/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/






/*function sayHello(name){
    console.log('Hello ' + name);

}
//sayHello('debarati');

console.log(window);*/

//to add sayHello function in global scope
/*var sayHello=function(){

}
window.sayHello();*/


//to load a module : here we are loading logger.js module
//require function takes the name of target module we want to load and returns the object that is exported from the target module

/*const log=require('./logger');

//console.log(logger);

log('message');*/


/*const http =require('http');
const server =http.createServer((req,res)=>
{
 //if (req.url==='/'){
 	//res.write('Hello world');
 	//res.end();
app.get('/',function(req,res))
{
  res.send('Hello');
}

 }

if(req.url === '/api/numbers'){
	res.write(JSON.stringyfy([1, 2, 3]));
	res.end();


 }

});
server.listen(8000);
console.log('listening to port 8000...');



*/










//to return an array of objects we need to use json









/*const http =require('http');
const server =http.createServer((req,res)=>
{
	if(req.url === '/api/numbers'){
	//res.write(JSON.stringify([1, 2, 3]));
	//res.end();
	res.write(JSON.stringify([1, 2, 3]));

 }

 });
server.listen(8000);
console.log('listening to port 8000...');


*/





/**
*adds two number
 @function
*@param {string} a - the first number to be added,first input given by user.
*@param {string} b - The second number to be added,second input given by user .
*@param{integer} result- stores the addition result.
*@param{tring}s- result is strored here after converting the result in string and sent as response. 
*/

var express = require('express');
var app = express();
app.get('/add/:a/:b', function(req, res, next){
  var result = parseInt(req.params.a)+ parseInt(req.params.b);
  var s = '' + result;
   res.send( 'add '+ s);
});
app.listen(3000);







 









/*var express = require('express');
var app = express();

app.get('/:id1 / :id2', function(req, res, next){
   res.send(req.params.id1 + req.params.id2);
});
app.listen(3000);*/