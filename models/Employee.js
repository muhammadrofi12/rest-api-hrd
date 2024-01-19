// import database
const db = require('../config/database');

// membuat class Employee
class Employee {
    // Mendapatkan semua data karyawan dari database
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM employees";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    // Membuat karyawan baru berdasarkan data yang diberikan
    // ("name", "gender":, "phone":, "address":, "email", "status", "hired_on", "timestamp")
    static async create(employees) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO employees SET ?";
            db.query(sql, employees, (err, results) => {
                resolve(results.insertId);
            });
        });


        // Mengembalikan data karyawan berdasarkan ID yang baru ditambahkan
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static async update(id, data) {
        // Memperbarui data karyawan berdasarkan ID
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE employees SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // Mengembalikan data karyawan yang telah diperbarui berdasarkan ID
        const employees = await this.find(id);
        return employees;
    }

    // Menghapus data karyawan berdasarkan ID
    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM employees WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    // Mencari dan mengembalikan data karyawan berdasarkan ID
    static find(id) {
        // Mengambil data karyawan dari database berdasarkan ID
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    // Mencari dan mengembalikan data karyawan berdasarkan nama (search)
    static async search(name) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE name LIKE ?`;
            db.query(sql, `%${name}%`, (err, results) => {
                resolve(results[0]);
            });
        });
       
    }

    // Mencari dan mengembalikan data karyawan berdasarkan status
    static async findByStatus(status) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM employees WHERE status = ?`;
            db.query(sql, [status], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

// export class Employee
module.exports = Employee;
