import 'dotenv/config.js';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { User } from '#schema/users/userSchema.js';

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: process.env.TOKEN_SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    },
    (req, payload, done) => {
      User.findOne({
        _id: payload.id,
        token: req.headers.authorization.split(' ')[1],
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
