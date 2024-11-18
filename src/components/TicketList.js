import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/api/tickets');
                setTickets(response.data);
            } catch (error) {
                console.error('Ошибка при получении тикетов:', error);
            }
        };
        fetchTickets();
    }, []);

    return (
        <div>
            <h1>Список тикетов</h1>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.ticketid}>
                        <Link to={`/tickets/${ticket.ticketid}`}>{ticket.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;
