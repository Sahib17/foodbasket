const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

function isLoggedIn(req, res, next){
    if (!req.cookies.token){
        return res.status(401).json({message: 'Unauthorised'});
    }
    try{
        let data = jwt.verify(req.cookies.token, process.env.SECRET);
        req.user = data;
        next();
    }
    catch(error){
        return res.status(400).json({message: 'invalid token'});
    }
}

module.exports = isLoggedIn;