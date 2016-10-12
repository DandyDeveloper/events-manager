module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/api/auth/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/loginSuccess', isLoggedIn, function(req, res) {
      return res.status(200).json({ "code" : 200, "token" : "Success", "user.id" : req.id,
                                  "user.name" : req.email,"user.group_id" : req.group_id });
    });

    app.get('/loginFailure', function(req, res) {
      return res.status(500).json({ "code" : 500  });
    });

    app.get('/signup', function(req, res) {
      return res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/api/auth/signup', passport.authenticate('local-signup', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', { user : req.user });

    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
