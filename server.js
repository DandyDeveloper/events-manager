var express         = require('express');
var mysql           = require('mysql');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var session         = require('express-session');
var sha1            = require('sha1');
var path            = require('path')
var engines         = require('consolidate');
var flash           = require('connect-flash');

var app             = express();
var dbConfiguration = require('./config/database.js')
var port            = 8888;
var pool            = mysql.createPool(dbConfiguration);

//Set EJS as Static file enginer
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'giveryAregiveryBest' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Resolving cross origin policy errors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var router = express.Router();  
app.use('/api', router);
router.use(function(req,res,next){//For logging  
  next(); 
});

//routes
require('./config/passport')(passport);
require('./views/routes.js')(app,passport);

app.listen(port,'0.0.0.0', function(){
      console.log("All right ! I am alive on " + port + ".");
  });
