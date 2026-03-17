const express = require('express');
const authController = require('../controllers/auth.controller');
 
const router = express.Router();

router.post('/register', authController.register);
router.get('/test', (req, res) => {
    // console.log(req.cookies);
    res.json({ message: 'Test route', cookies: req.cookies });
});

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // TODO: Implement login logic
// });

module.exports = router; 