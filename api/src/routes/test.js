const express = require('express');
const router = express.Router();
const test = require('../services/test');

// GET /, returns a list
router.get('/', async function(req, res, next) {
    try {
        res.json(await test.getMultiple());
    } catch (err) {
        console.error(`Error while getting multiple: ${err.message}`);
        next(err);
    }
});
module.exports = router;