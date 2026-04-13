const express = require('express');
const router = express.Router();
const {createUser , getUsers, updateUser, deleteUser} = require('../controllers/userController');

// POST 
router.post('/', createUser);

// 2. READ 
router.get('/', getUsers);

// 3. UPDATE 
router.put('/:id', updateUser);

// 4. DELETE 
router.delete('/:id', deleteUser);

module.exports = router;