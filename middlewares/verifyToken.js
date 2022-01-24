// import jwt from 'jsonwebtoken'

export function verifyToken (req,res,next) {
    authHeader = req.headers.token
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SEC_KEY, (err, user) =>{
            if (err) res.status(403).json("Token is not valid");
            req.user = user;
            next();
        })
    }else {
        return res.status(401).json(" You are not authenticated!")
    }
}

export function verifyTokenAndAuthorization (req, res, next) {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

export function verifyTokenAndAdmin (req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

