const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    res.render('news', { items });
});

module.exports = router;