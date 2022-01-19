const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
    // ginger replace 
    // const header = req.headers['authorization'];
    // if (header) {
    //     const token = header.split(' ')[1];
    //     jwt.verify(token, process.env.SECRET, async (err, data) => {
    //         console.log(data);
    //         if(err){
    //             res.status(403).json({ err: 'Invalid token' })
    //         } else {
    //             console.log('next')
    //             next();
    //         }
    //     })
    // } else {
    //     res.status(403).json({ err: 'Missing token' })
    // }
    // ginger add
    const token = req.header('authorization');
    console.log("token", token)
    if(!token) return res.status(401).send('Access denied!');
    try {
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verifiedToken;
        console.log("user",req.user);
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }

}
module.exports = {
    verifyToken
}