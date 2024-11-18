import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import UserList from './components/UserList';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AdminPanel />} />
                    <Route path="/tickets" element={<TicketList />} />
                    <Route path="/tickets/:ticketid" element={<TicketDetail />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
