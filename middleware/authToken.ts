import  jwt  from 'jsonwebtoken';
import isNull from "lodash"

const authToken = async (req, res, next) => {
    const checkToken = req.headers["authorization"];
    const token = checkToken && checkToken.split(" ")[1];
    if(!token){
      return res.status(401).json({ msg: 'User does not accept to api' });
    }
    jwt.verify(checkToken.split(" ")[1], process.env.ACCESS_TOKEN_SECRET, (error)=> {
        if(error) return res.status(403);
        next();
    })
}

export {authToken}