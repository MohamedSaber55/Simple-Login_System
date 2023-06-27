import jwt from "jsonwebtoken"



const isAuth = async (req, res, next) => {
    const token = req.header('token')
    jwt.verify(token, process.env.JWT_PASS, async function (err, decoded) {
        if (err) {
            res.json({ message: "error in token", error: err });
        } else {
            req.userId = decoded.userId;
            next()
        }
    })
}

export { isAuth }