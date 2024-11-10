const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb',
    port: 3307
});

db.connect((err) => {
    if (err) {
        console.error("Không thể kết nối tới MySQL", err);
        return;
    }
    console.log("Đã kết nối đến MySQL");
});

// Get all users
app.get('/api/users', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.error("Lỗi khi truy vấn người dùng:", err);
            return res.status(500).json({ error: "Lỗi máy chủ khi lấy danh sách người dùng." });
        }
        res.json(result);
    });
});

// Add a new user
app.post('/api/users', (req, res) => {
    const { email, username, password, avatar } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ message: "Thiếu thông tin!" });
    }

    const avatar2 = avatar || 'default-avatar.png';

    db.query(
        "INSERT INTO users (email, username, password, avatar) VALUES (?, ?, ?, ?)",
        [email, username, password, avatar2],
        (err, result) => {
            if (err) {
                console.error("Lỗi khi thêm người dùng:", err);
                return res.status(500).json({ error: "Lỗi máy chủ khi thêm người dùng." });
            }
            res.status(201).json({
                id: result.insertId,
                email,
                username,
                password,
                avatar: avatar2
            });
        }
    );
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("Lỗi khi xóa người dùng:", err);
            return res.status(500).json({ error: "Lỗi máy chủ khi xóa người dùng." });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Không tìm thấy người dùng với id này." });
        }
        res.status(200).json({ message: "Xóa người dùng thành công!" });
    });
});
app.patch('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { email, username, password } = req.body;
    if (!email && !username && !password) {
        return res.status(400).json({ message: "Thiếu thông tin cần cập nhật!" });
    }
    const fieldsToUpdate = [];
    const values = [];

    if (email) {
        fieldsToUpdate.push("email = ?");
        values.push(email);
    }
    if (username) {
        fieldsToUpdate.push("username = ?");
        values.push(username);
    }
    if (password) {
        fieldsToUpdate.push("password = ?");
        values.push(password);
    }

    values.push(id); // Thêm id vào cuối mảng `values` để dùng trong WHERE
    const query = `UPDATE users SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Lỗi khi cập nhật người dùng:", err);
            return res.status(500).json({ error: "Lỗi máy chủ khi cập nhật người dùng." });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Không tìm thấy người dùng với id này." });
        }
        res.status(200).json({ message: "Cập nhật thông tin người dùng thành công!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
