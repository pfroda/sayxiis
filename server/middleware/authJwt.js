const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("../config/.token");

async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token; // Extract token from cookies

        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }

        const decoded = jwt.verify(token, TOKEN_SECRET);
        req.user = decoded;
        console.log('token workingggg')
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = authMiddleware;