import passport from 'passport';
import passportJWT from 'passport-jwt';
import { User } from 'server/models/schema/users/userSchema.js';

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: process.env.TOKEN_SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    },
    (req, payload, done) => {
      User.find({
        _id: payload.id,
        token: req.headers.autherization.split(' ')[1],
        verify: true,
      })
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(new Error('Toke is invalid'));
        })
        .catch(error => {
          return done(error, null);
        });
    }
  )
);
