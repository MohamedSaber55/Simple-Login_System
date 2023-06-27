import usersModel from "../../../databases/models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const signUp = async (req, res) => {
    const { first_name, last_name, email, password, age } = req.body
    const isFound = await usersModel.findOne({ email })
    if (isFound) {
        res.json({ message: "email is already used" })
    } else {
        bcrypt.hash(password, 8, async function (err, hash) {
            // Store hash in your password DB.
            const user = await usersModel.insertMany({ first_name, last_name, email, password: hash, age })
            res.json({ message: "signup success", user })
        });
    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body
    const user = await usersModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            //login and send token
            const token = jwt.sign({ first_name: user.first_name, last_name: user.last_name, userId: user._id, email: user.email }, process.env.JWT_PASS)
            res.json({ message: "login success", token })
        } else {
            res.json({ message: "incorrect password" })
        }
    } else {
        res.json({ message: "email not found" })
    }
}


export { signIn, signUp }