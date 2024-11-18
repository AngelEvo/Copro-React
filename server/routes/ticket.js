const express = require('express');
const router = express.Router();
const { getTickets } = require('../models/ticket');

router.get('/', async (req, res) => {
    const tickets = await getTickets();
    res.json(tickets);
});

module.exports = router;