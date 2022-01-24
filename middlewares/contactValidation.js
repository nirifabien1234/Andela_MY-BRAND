
export function validateContact (req, res, next) {

    if (req.body.first_name ==='' || req.body.first_name.length < 2 || !req.body.first_name) {
        res.status(401).json("Please provide your first name")
    }
    else if (req.body.last_name ==='' || req.body.last_name.length < 2 || !req.body.last_name) {
        res.status(401).json("Please provide your last name")
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))) {
        res.status(401).json("Please provide a valid email")
    }
    else if (!req.body.subject || req.body.subject.length < 3 || req.body.subject === '') {
        res.status(401).json("Please type a subject your are about to talk about")
    }
    else if (!req.body.message || req.body.message.length < 3 || req.body.message === '') {
        res.status(401).json("Please type your message")
    }
    else{
        next()
    }

}

