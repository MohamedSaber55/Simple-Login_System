
export function validation(scheme) {
    return (req, res, next) => {
        let { error } = scheme.validate(req.body, { abortEarly: false });
        if (error?.details) {
            res.json(error?.details)
        } else {
            next()
        }
    }
}