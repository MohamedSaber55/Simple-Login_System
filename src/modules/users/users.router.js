import express from 'express';
import { validation } from '../../middleware/validation.js';
import { signIn, signUp} from './users.controller.js';
import { signInScheme, signUpScheme } from './users.validation.js';

const userRouter = express.Router()

userRouter.post('/signup', validation(signUpScheme), signUp)
userRouter.post('/signin', validation(signInScheme), signIn)



export default userRouter