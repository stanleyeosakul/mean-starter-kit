const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        result: 'success'
    })
});
module.exports = router;