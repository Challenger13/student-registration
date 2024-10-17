// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

exports.authenticate = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = decoded; // Attach user info to request
        next();
    });
};
