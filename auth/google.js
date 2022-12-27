const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GoogleClientID,
  clientSecret: process.env.GoogleClientSecret,
  callbackURL: "http://localhost:5000/google/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    return cb(null, profile);
    /* 
    ai tu ta pedindo pra dar erro mesmokkkkkkkkkk
 

    ==> Você nao tem um modelo de usuário, muito menos User declarado aqui, isso é + complexo. <==

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return cb(err, user);
     });
     */
  }
));

//Esqueceu do export
module.exports = passport;