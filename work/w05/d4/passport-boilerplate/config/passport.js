const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Student = require('../models/student');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) { // verify callback
    // a user has logged in via OAuth!
    // console.log(profile, "<----- Profile")
    // Fetch the User from the database and provide them back to passport 
    // by calling the cb
    Student.findOne({ 'googleId': profile.id }, function(err, student) {
      if (err) return cb(err);
      if (student) {
        if (!student.avatar) {
          student.avatar = profile.photos[0].value;
          student.save(function(err) {
            return cb(null, student);
          });
        } else {
          return cb(null, student);
        }
      } else {
        // If the USer doesn't exist go ahead create them, and then call you cb
        // we have a new student via OAuth!
        const newStudent = new Student({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newStudent.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStudent);
        });
      }
    });
  }
));

passport.serializeUser(function(student, done) {
  done(null, student.id); // storing our id in our session

});

// called every time ar request comes from our server
passport.deserializeUser(function(id, done) {
  // this is where we find the document to attach to req.user
  Student.findById(id, function(err, student) {
    done(err, student); // assigns our document to req.user

    
  });
});



