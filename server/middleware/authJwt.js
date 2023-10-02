// const jwt = require("jsonwebtoken");
// const config = require("../config/.token");
// // const db = require("../models");
// const User = db.userProfileSchema;

// async function verifyToken (req, res, next) {
//     let {token} = req.cookies;
  
//     if (!token) {return res.status(403).send({ message: "No token provided!"});}

//     try {
//      const user = await jwt.verify(token, config.TOKEN_SECRET)
//       req.user = user;
//       next();
//     } catch (err) {
//       res.status(403).json({message: 'invalid token'})
//     }
//   };

//   const authJwt = verifyToken;

//   module.exports = authJwt;