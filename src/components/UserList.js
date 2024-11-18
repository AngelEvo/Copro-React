import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <li key={user.userid}>
                        {user.name} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
