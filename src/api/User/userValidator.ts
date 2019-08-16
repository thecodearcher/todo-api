import Joi from "@hapi/joi";

export const schema = Joi.object().keys({
    username: Joi.string(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().min(7).alphanum().required(),
    email: Joi.string().email().required(),
});
