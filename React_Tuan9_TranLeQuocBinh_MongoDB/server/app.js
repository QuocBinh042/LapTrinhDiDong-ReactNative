const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/userdb').then(() => {
    console.log("Đã kết nối đến MongoDB");
}).catch((err) => {
    console.error("Không thể kết nối tới MongoDB", err);
});

// Định nghĩa schema và model cho User
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: 'default-avatar.png' },
});

const User = mongoose.model('User', userSchema);

// Lấy danh sách tất cả người dùng
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error("Lỗi khi truy vấn người dùng:", err);
        res.status(500).json({ error: "Lỗi máy chủ khi lấy danh sách người dùng." });
    }
});

// Thêm người dùng mới
app.post('/api/users', async (req, res) => {
    const { email, username, password, avatar } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ message: "Thiếu thông tin!" });
    }

    try {
        const newUser = new User({
            email,
            username,
            password,
            avatar: avatar || 'default-avatar.png',
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Lỗi khi thêm người dùng:", err);
        res.status(500).json({ error: "Lỗi máy chủ khi thêm người dùng." });
    }
});
// Xóa người dùng
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng với id này." });
        }
        res.status(200).json({ message: "Xóa người dùng thành công!" });
    } catch (err) {
        console.error("Lỗi khi xóa người dùng:", err);
        res.status(500).json({ error: "Lỗi máy chủ khi xóa người dùng." });
    }
});

// Cập nhật người dùng
app.patch('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { email, username, password } = req.body;

    if (!email && !username && !password) {
        return res.status(400).json({ message: "Thiếu thông tin cần cập nhật!" });
    }

    try {
        const updateFields = {};
        if (email) updateFields.email = email;
        if (username) updateFields.username = username;
        if (password) updateFields.password = password;

        const updatedUser = await User.findByIdAndUpdate(id, updateFields, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng với id này." });
        }
        res.status(200).json({ message: "Cập nhật thông tin người dùng thành công!", updatedUser });
    } catch (err) {
        console.error("Lỗi khi cập nhật người dùng:", err);
        res.status(500).json({ error: "Lỗi máy chủ khi cập nhật người dùng." });
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
