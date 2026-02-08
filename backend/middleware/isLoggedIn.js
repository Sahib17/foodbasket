// requirements
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const isLoggedIn = async (req, res, next) => {

    // if no cookies, say unauthorised
    if (!req.cookies || !req.cookies.token){
        return res.status(401).json({message: 'Unauthorised'});
    }

    // try verifying the token, if success, go to next and also parse user details
    try{
        let data = jwt.verify(req.cookies.token, process.env.SECRET);
        req.user = data;
        const user = await userModel.findOne({_id: data.userid});
        if(user.role === 'BANNED_USER'){
            return res.status(401).json({message: 'you are banned'})
        }        
        return next();
    }
    catch(error){
        return res.status(401).json({message: 'invalid token'});
    }
}

module.exports = isLoggedIn;