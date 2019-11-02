outer.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        if(user){
            req.logIn(user, function(err) {
                if (err) { 
                    return next(err); 
                } else {
                    res.send({
                        success: true,
                        response: 'signup successful'
                    });
                }
            });
        }

        if(!user){
            res.send({
                success: false,
                response: 'Authentication Failed'
            });
        }

        if(err){
            res.send({
                success: false,
                response: 'Authentication failed'
            })
        }
    })(req, res, next);
});