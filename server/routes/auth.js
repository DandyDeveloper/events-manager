let domain = 'http://localhost:5000';

module.exports = function(app, passport) {
    app.post('/api/auth/login', passport.authenticate('local-login', {
        successRedirect : domain + '/profile', 
        failureRedirect : domain + '/login'
    }));

    app.post('/api/auth/signup', passport.authenticate('local-signup', {
      successRedirect : domain + '/profile', 
      failureRedirect : domain + '/signup'
    }));

    app.get('/api/auth/logout', function(req, res) {
        	req.logout(function(){
                if(err){
                    console.log(err);
                }
            });
            res.status(200).send({message:"signed out"});
    });
};