const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        // RegEx validation for email format
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
    },
    age: { 
        type: Number, 
        required: true,
        min: 18,
        max: 65,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);