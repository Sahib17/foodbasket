// requirements
const jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next){

    // if no cookies, say unauthorised
    if (!req.cookies || !req.cookies.token){
        return res.status(401).json({message: 'Unauthorised'});
    }

    // try verifying the token, if success, go to next and also parse user details
    try{
        let data = jwt.verify(req.cookies.token, process.env.SECRET);
        req.user = data;
        next();
    }
    catch(error){
        return res.status(401).json({message: 'invalid token'});
    }
}

module.exports = isLoggedIn;