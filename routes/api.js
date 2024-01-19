// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// import authMiddleware
const { authenticateToken } = require('../middleware/authMiddleware');

// import express
const express = require("express");

// import jsonwebtoken
const jwt = require('jsonwebtoken');

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing login
router.post('/login', async (req, res) => {
  // Mendapatkan data penggunaan dari body permintaan
  const { username, password } = req.body;

  // Memeriksa nama pengguna dan kata sandi, kemudian menghasilkan token JWT jika valid
  if (username === 'Rofi' && password === '12345') {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Mengirimkan token JWT sebagai respons jika autentikasi berhasil
      res.json({ token });
  } else {
    // Mengirimkan respons status 401 jika autentikasi gagal
      res.status(401).json({ message: 'Autentikasi gagal' });
  }
});

// Membuat routing employee
router.get('/employees', authenticateToken, EmployeeController.index);
router.post('/employees', authenticateToken, EmployeeController.create);
router.put('/employees/:id', authenticateToken, EmployeeController.update);
router.delete('/employees/:id', authenticateToken, EmployeeController.destroy);
router.get('/employees/:id', EmployeeController.find);
router.get('/employees/search/:name', EmployeeController.search);
// get karyawan aktif
router.get('/employees/status/active', authenticateToken, (req, res) => EmployeeController.findByStatus(req, res, 'active'));
// get karyawan tidak aktif
router.get('/employees/status/inactive', authenticateToken, (req, res) => EmployeeController.findByStatus(req, res, 'inactive'));
// get karyawan yang dihentikan
router.get('/employees/status/terminated', authenticateToken, (req, res) => EmployeeController.findByStatus(req, res, 'terminated'));

// export router
module.exports = router;
