import Joi from 'joi';

const userValidation = Joi.object({
  password: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'pl'] },
    })
    .required(),
}).and('email', 'password');

export { userValidation };
