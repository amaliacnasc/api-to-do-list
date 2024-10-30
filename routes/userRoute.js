const user = require('../controllers/User');
const express = require("express");
const router = express.Router(); 

router.get('/users', user.getAllUsers); 
router.get('/user/:userId', user.getUserById); 
router.put('/user/update/:userId', user.updateUserById); 
router.delete('/user/delete/:userId', user.deleteUserById); 

module.exports = router; 