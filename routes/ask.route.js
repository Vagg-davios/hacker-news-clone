const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the ask route');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;  // Capture the id from the request
    res.send(`this is the ask route for ${id}`);
});

module.exports = router;