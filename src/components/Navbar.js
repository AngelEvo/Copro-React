import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Панель администратора</Link></li>
                <li><Link to="/tickets">Список тикетов</Link></li>
                <li><Link to="/users">Список пользователей</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
