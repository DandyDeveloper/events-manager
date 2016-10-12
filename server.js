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
var httpProxy       = require('http-proxy');

var app             = express();
var proxy           = httpProxy.createProxyServer();
var dbConfiguration = require('./config/database.js')
var port            = 8888;
var pool            = mysql.createPool(dbConfiguration);
var isProduction    = process.env.NODE_ENV === 'production';

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

//Setup Proxying only runs if we're not in production
if (!isProduction) {
  var bundle = require('./build/bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });
}

//routes
require('./config/passport')(passport);
require('./app/routes.js')(app,passport);

//Catch any errors during proxying for Webpack
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port,'0.0.0.0', function(){
      console.log("All right ! I am alive on " + port + ".");
  });
