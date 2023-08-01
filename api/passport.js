const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:8080/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            var userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                token: accessToken
            };
            callback(null, userData);

        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, user);
});