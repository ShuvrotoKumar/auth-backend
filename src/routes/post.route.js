const express = require('express');
const router = express.Router();


router.post('/create', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Post created' });
});

router.get('/test', (req, res) => {
    res.json({ message: 'Test route' });
});



module.exports = router;