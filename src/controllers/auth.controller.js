const userModel = require('../models/user.model');


async function register(req, res) {
    const { username, email, password } = req.body;
    // TODO: Implement registration logic
}

// async function login(req, res) {
//     const { email, password } = req.body;
//     // TODO: Implement login logic
// }

module.exports = {
    register,
    // login
};