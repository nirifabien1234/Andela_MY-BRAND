
export function validateProfile (req, res, next) {

    if (req.body.first_name ==='' || req.body.first_name.length < 2 || !req.body.first_name) {
        res.status(401).json("Please provide your first name")
    }
    else if (req.body.last_name ==='' || req.body.last_name.length < 2 || !req.body.last_name) {
        res.status(401).json("Please provide your last name")
    }
    else if (!req.body.gender || req.body.gender === '') {
        res.status(401).json("Please enter your gender")
    }
    else{
        next()
    }

}
