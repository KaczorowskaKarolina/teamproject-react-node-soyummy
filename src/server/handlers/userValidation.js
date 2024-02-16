import Joi from 'joi';

const userValidation = Joi.object({
  password: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'pl'] },
    })
    .required(),
  name: Joi.string().required(),
}).and('email', 'password', 'name');

export { userValidation };
