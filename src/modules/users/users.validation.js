import Joi from 'joi';



const signUpScheme = Joi.object({
    first_name: Joi.string().min(3).max(20).required(),
    last_name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    // password: Joi.string().pattern().min(8).required(),
    password: Joi.string().min(8).required(),
    rePassword: Joi.ref('password')
})


const signInScheme = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
})


export { signInScheme, signUpScheme }