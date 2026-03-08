const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const { username, email, password } = req.body;
    // TODO: Implement registration logic


    const user = new userModel({
        username,
        email,
        password
    });

    // await user.save();

    // res.status(201).json({
    //     message: 'User registered successfully'
    // });
}

// async function login(req, res) {
//     const { email, password } = req.body;
//     // TODO: Implement login logic
// }

module.exports = {
    register,
    // login
};