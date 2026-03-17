const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = new userModel({
            username,
            email,
            password
        });

        const token = jwt.sign({ id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }); 
        await user.save();
        res.cookie('mamaToken', token, { httpOnly: true });
        res.status(201).json({
            message: 'User registered successfully',
            user,
            token
        });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            res.status(400).json({
                message: 'Email already exists',
                error: 'DUPLICATE_EMAIL'
            });
        } else {
            res.status(500).json({
                message: 'Registration failed',
                error: error.message
            });
        }
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    // TODO: Implement login logic
}

module.exports = {
    register,
    login
}