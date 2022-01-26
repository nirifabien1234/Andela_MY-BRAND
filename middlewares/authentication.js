import jwt from 'jsonwebtoken';
import 'dotenv/config';
//Authentication with JWT
export default function authenticate(req,res,next){
    const token = req.cookies.jsonwebtoken;
    // check json web token exist and verified
    if(token){
        jwt.verify(token, process.env.SEC_KEY, (err, decordedToken)=>{
            if(err){
                console.log(err);
                res.status(401).json({message: err});
            }else{
                console.log(decordedToken);
                next();
            }
        })
    } else{
        res.json({message: 'Not authorized'});
    }
}
