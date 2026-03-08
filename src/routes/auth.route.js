const express = require('express');
const authController = require('../controllers/auth.controller');
 
const router = express.Router();

router.post('/register', authController.register);

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // TODO: Implement login logic
// });

module.exports = router; 