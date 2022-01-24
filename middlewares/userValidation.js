
export function validateUser (req, res, next) {

    if (req.body.username ==='' ||!req.body.username || req.body.username.length < 3 ) {
        res.status(401).json("Please provide a username more than 3 characters")
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email) || !req.body.email)) {
        res.status(401).json("Please provide a valid email")
    }
    else if ( !req.body.password || req.body.password.length < 8) {
        res.status(401).json("Password must be set and greater or equal to 8 characters")
    }
    else{
        next()
    }

}