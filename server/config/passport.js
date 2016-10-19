// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var mysql           = require('mysql');
var sha1            = require('sha1');

var dbConfiguration = require('../config/database.js')
var connection = mysql.createConnection(dbConfiguration);

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      connection.query("select * from users where id = "+ id, function(err,user) {
  			done(err, user[0]);
  		});
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
      },
      function(req, email, password, done) {
        connection.query("select * from users where email = '"+ email +"'",function(err,user) {
	         console.log(user);
           console.log("above row object");
           if (err)
              return done(err);
           if (user.length) {
              return done(null, false);
           } else {
              var passwordHash = sha1(req.body.password)
              var newUserMysql = new Object();
              newUserMysql.name     = req.body.name;
              newUserMysql.password = passwordHash;
  						newUserMysql.email    = req.body.email;
              newUserMysql.group_id = req.body.group_id;

  				    var insertQuery = "INSERT INTO users (name, password, email, group_id) values ('"+ req.body.name +"','"+ passwordHash +"','"+ req.body.email +"','"+ req.body.group_id +"')";
  					  console.log(insertQuery);

              connection.query(insertQuery,function(err,user){
                newUserMysql.id = user.insertId;

                return done(null, newUserMysql);
  				    });
          }
  		  });
      }));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
      },
      function(req, email, password, done) { // callback with email and password from our form
        var passwordHash = sha1(password);
        connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,user) {
			     if (err)
              return done(err);
           if (!user.length) {
              return done(null, false); 
           }

  			// if the user is found but the password is wrong
           if (!( user[0].password == passwordHash))
              return done(null, false); 
        // all is well, return successful user
           return done(null, user[0]);
		     });
      })
    );



};
