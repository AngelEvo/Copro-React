import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
    const { ticketid } = useParams();
    const [ticket, setTicket] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await axios.get(`/api/tickets/${ticketid}`);
                setTicket(response.data);
            } catch (error) {
                console.error('Ошибка при получении тикета:', error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get(`/api/tickets/${ticketid}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error('Ошибка при получении комментариев:', error);
            }
        };

        fetchTicket();
        fetchComments();
    }, [ticketid]);

    if (!ticket) return <div>Загрузка...</div>;

    return (
        <div>
            <h1>{ticket.title}</h1>
            <p>{ticket.description}</p>
            <h2>Комментарии</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.commentid}>{comment.comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default TicketDetail;
