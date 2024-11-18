const pool = require('../config/db');

const getTickets = async () => {
    const res = await pool.query('SELECT * FROM tickets');
    return res.rows;
};

module.exports = { getTickets };