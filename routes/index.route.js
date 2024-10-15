const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const items = ['A', 'B', 'C'];
    res.render('index', { items });
});

module.exports = router;