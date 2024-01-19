// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.create);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.destroy);
router.get('/employees/:id', EmployeeController.find);
router.get('/employees/search/:name', EmployeeController.search);
// get karyawan aktif
router.get('/employees/status/active', (req, res) => EmployeeController.findByStatus(req, res, 'active'));
// get karyawan tidak aktif
router.get('/employees/status/inactive', (req, res) => EmployeeController.findByStatus(req, res, 'inactive'));
// get karyawan yang dihentikan
router.get('/employees/status/terminated', (req, res) => EmployeeController.findByStatus(req, res, 'terminated'));

// export router
module.exports = router;
