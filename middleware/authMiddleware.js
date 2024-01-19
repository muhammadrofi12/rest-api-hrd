const jwt = require('jsonwebtoken');

// Middleware untuk memverifikasi token JWT
const authenticateToken = (req, res, next) => {
    // Mengambil token dari header Authorization pada permintaan
    const authHeader = req.header('Authorization');
    
    // Memeriksa apakah header Authorization ada
    if (!authHeader) {
        // Mengirimkan respons status 401 jika header Authorization tidak ada
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Mengambil token dari header Authorization
    const token = authHeader.split(' ')[1];

    if (!token) {
        // Mengirimkan respons status 401 jika token tidak ada
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // Mengirimkan respons status 403 jika token tidak valid
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
};

// eksport middleware
module.exports = { authenticateToken };
