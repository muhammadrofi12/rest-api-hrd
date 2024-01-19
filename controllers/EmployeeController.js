// import Model Employee
const Employee = require("../models/Employee");

// buat class EmployeeController
class EmployeeController {
    // Menampilkan semua data karyawan
    async index(req, res){
        try {
            const employees = await Employee.all();
            
            if (employees.length === 0) {
                // Memberikan respons jika data kosong
                  const data = {
                      message: "Data is empty",
                      code: 200
                  };
                  res.status(200).json(data);
              } else {
                // Memberikan respons data karyawan
                  const data = {
                      message: "Menampilkan data employee",
                      data: employees
                  };
                  res.status(200).json(data);
              }
          } catch (error) {
            // Memberikan respons jika terjadi kesalahan server
              res.status(500).json({ message: "Internal Server Error" });
          }
    }

    // Membuat karyawan baru
    async create(req, res){
        try {
            const { name, status } = req.body;
    
            if (!name || !status) {
                // Mengembalikan pesan jika ada field yang tidak diisi
                const data = {
                    message: "All fields must be filled correctly",
                    code: 422
                };
                res.status(422).json(data);
            } else {
                // Menambahkan karyawan baru dan mengembalikan data karyawan yang baru ditambahkan
                const employee = await Employee.create(req.body);
                const data = {
                    message: "Menambahkan data employee",
                    data: employee,
                };
                res.status(201).json(data);
            }
        } catch (error) {
            // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    // Memperbarui data karyawan
    async update(req, res){
        try {
            const { id } = req.params;
            const employee = await Employee.find(id);
    
            if (employee) {
                // Memperbarui data karyawan dan mengembalikan data yang telah diperbarui
                const employeeUpdated = await Employee.update(id, req.body);
                const data = {
                    message: "Mengupdate data employee",
                    data: employeeUpdated,
                };
                res.status(200).json(data);
            } else {
                // Mengembalikan pesan jika data tidak ditemukan
                const data = {
                    message: "Data tidak ada",
                };
                res.status(404).json(data);
            }
        } catch (error) {
            // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    // Menghapus data karyawan
    async destroy(req, res){
        try {
            const { id } = req.params;
            const employee = await Employee.find(id);
    
            if (employee) {
                // Menghapus data karyawan dari database
                await Employee.delete(id);
                const data = {
                    message: "Menghapus data employee",
                };
                res.status(200).json(data);
            } else {
                // Mengembalikan pesan jika data tidak ditemukan
                const data = {
                    message: "Data tidak ditemukan",
                };
                res.status(404).json(data);
            }
        } catch (error) {
            // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    // Menampilkan detail data karyawan berdasarkan ID
    async find(req, res){
        try {
            const { id } = req.params;
            const employee = await Employee.find(id);
    
            if (employee) {
                // Mengembalikan detail data karyawan jika data ditemukan
                const data = {
                    message: "Menampilkan detail data employee",
                    data: employee,
                };
                res.status(200).json(data);
            } else {
                // Mengembalikan pesan jika data tidak ditemukan
                const data = {
                    message: "Data tidak ada",
                };
                res.status(404).json(data);
            }
        } catch (error) {
             // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    // Mencari dan menampilkan data karyawan berdasarkan nama
    async search(req, res){
        try {
            const { name } = req.params;
            const employees = await Employee.search(name);
            console.log(employees)
            if (employees) {
                // Mengembalikan data karyawan jika ditemukan
                const data = {
                    message: "Menampilkan detail data employee",
                    data: employees,
                };
                res.status(200).json(data);
            } else {
                // Mengembalikan pesan jika data tidak ditemukan
                const data = {
                    message: "Data tidak ditemukan",
                };
                res.status(404).json(data);
            }
        } catch (error) {
            // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    // Menampilkan data karyawan berdasarkan status
    // active, inactive, terminated
    async findByStatus(req, res, status){
        try {
            const employees = await Employee.findByStatus(status);
    
            if (employees.length > 0) {
                // Mengembalikan data karyawan berdasarkan status jika ditemukan
                const data = {
                    message: `Menampilkan data employee dengan status ${status}`,
                    data: employees,
                };
                res.status(200).json(data);
            } else {
                // Mengembalikan pesan jika data tidak ditemukan
                const data = {
                    message: "Data tidak ada",
                };
                res.status(404).json(data);
            }
        } catch (error) {
            // Mengembalikan pesan jika terjadi kesalahan server
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;