var express         = require('express');
var app             = express();
var mysql           = require('mysql');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var session         = require('express-session');
var md5             = require('md5');
var path            = require('path')
var engines         = require('consolidate');
var flash           = require('connect-flash');
var port            = 8888;

var dbConfiguration = require('./config/database.js')

var pool = mysql.createPool(dbConfiguration);

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

var router = express.Router();
app.use('/api', router);
router.use(function(req,res,next){//For logging  

  next();
});

//routes
require('./config/passport')(passport);
require('./app/routes.js')(app,passport);

app.listen(port,'0.0.0.0', function(){
      console.log("All right ! I am alive on " + port + ".");
  });
