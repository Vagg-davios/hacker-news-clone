const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the submit route');
});

module.exports = router;