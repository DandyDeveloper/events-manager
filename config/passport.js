// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var mysql           = require('mysql');
var md5             = require('md5');

var dbConfiguration = require('../config/database.js')
var connection = mysql.createConnection(dbConfiguration);

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      connection.query("select * from users where id = "+ id, function(err,rows) {
  			done(err, rows[0]);
  		});
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
      },
      function(req, email, password, done) {
        connection.query("select * from users where email = '"+ email +"'",function(err,rows) {
	         console.log(rows);
           console.log("above row object");
           if (err)
              return done(err);
           if (rows.length) {
              return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
           } else {
              var passwordHash = md5(req.body.password)
              var newUserMysql = new Object();
              newUserMysql.name     = req.body.name;
              newUserMysql.password = passwordHash;
  						newUserMysql.email    = req.body.email;
              newUserMysql.group_id = req.body.group_id;

  				    var insertQuery = "INSERT INTO users (name, password, email, group_id) values ('"+ req.body.name +"','"+ passwordHash +"','"+ req.body.email +"','"+ req.body.group_id +"')";
  					  console.log(insertQuery);

              connection.query(insertQuery,function(err,rows){
                newUserMysql.id = rows.insertId;

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
        var passwordHash = md5(password);
        connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows) {
			     if (err)
              return done(err);
           if (!rows.length) {
              return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
           }

  			// if the user is found but the password is wrong
           if (!( rows[0].password == passwordHash))
              return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
  			              // all is well, return successful user
           return done(null, rows[0]);
		     });
      })
    );



};
