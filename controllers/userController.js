const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};


// Create User function
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// UPDATE: User ki details change karne ke liye
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Updated data wapas milega
            runValidators: true 
        });
        if (!user) return res.status(404).json({ success: false, error: 'User nahi mila' });
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// DELETE: User delete karne ke liye
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ success: false, error: 'User nahi mila' });
        res.status(200).json({ success: true, message: 'User delete ho gaya' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};