const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/user');

router.get('/', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

module.exports = router;