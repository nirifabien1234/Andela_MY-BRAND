import User from '../models/User.js'
import jwt from 'jsonwebtoken'
const { sign } = jwt
import bcrypt from 'bcrypt'


// This is a function to create json web tokens
const maxAge = 3*60*60*24;
const createTokens = (id)=>{
    return sign({id}, process.env.SEC_KEY, {
        expiresIn: maxAge
    });
}

//User creation
export async function register(req, res){
    
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        
        
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
        
    }
}

//User login
export async function login(req, res){

    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json({message: "Wrong email detected!"});

        let validated = await bcrypt.compare(req.body.password, user.password);
        console.log(user)
        console.log(validated)
   
        if (validated) {
                    // JSON WEB TOKEN FOR ATHENTICATING LOGIN
            const token = createTokens(user._id);
            res.cookie('jsonwebtoken',token, { httpOnly: true, maxAge:maxAge*1000 })
        
            // console.log(process.env.SEC_KEY)
        
            const { password, ...others } = user._doc;
        
            res.status(200).json({...others, token});

        } else {
            res.status(200).json({
                message: "Incorrect email or password"
            })
        }

      } catch (err) {
        res.status(500).json(err);
      }

}


//KICKING A USER OUT OF THE SYSTEM.
export function logout(req, res){
    res.cookie('jsonwebtoken', '', { maxAge: 1 });
    res.json({user : 'user signed out'});
}