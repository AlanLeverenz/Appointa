// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {

    Model.User.findOne({
        where: {
                email: email
        }
    }).then(function(user, err) {
        console.log('I entered'+user);
        console.log('I entered'+err);
        if(err) {
                console.log(err);
                return done(null, false);
        }

        if(user == null) {
            Model.User.create({
                email: email,
                password: password
            }).then(function(user) {
                return done(null, user);
            }).catch(function(err) {
                return done(null, err);
            });
        }

        if(user){
                return done(null, false);
        }

    })

}));