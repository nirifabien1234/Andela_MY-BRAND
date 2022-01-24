
export function validatePost (req, res, next)  {

    if (req.body.title ==='' || req.body.title.length < 3 || !req.body.title) {
        res.status(401).json("Please provide a post title more than 3 characters")
    }
    else if (req.body.desc ==='' || req.body.desc.length < 10 || !req.body.desc) {
        res.status(401).json("Please write enougth body of your post!")
    }
    else if ( !req.body.author || req.body.author === '') {
        res.status(401).json("Author of the post must be set!")
    }
    else{
        next()
    }

}
