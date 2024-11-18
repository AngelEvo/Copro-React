const pool = require('../config/db');

const getUsers = async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
};

module.exports = { getUsers };