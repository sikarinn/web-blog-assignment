const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      User = require('./models/User'),
      GOOGLE_CLIENT_ID = "160580125794-bnn0l9ao9v9eufgmva1fseicin703f4l.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    new User({
        username: profile.displayName,
        googleId: profile.id,
        email: profile.emails,
    }).save()
    done(null, profile);
}
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
