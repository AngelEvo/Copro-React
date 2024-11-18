-- Create users table
CREATE TABLE users (
    userid SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL -- e.g., 'admin', 'support', 'user'
);

-- Create tickets table
CREATE TABLE tickets (
    ticketid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'open', -- e.g., 'open', 'closed'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid INT REFERENCES users(userid)
);

-- Create comments table
CREATE TABLE comments (
    commentid SERIAL PRIMARY KEY,
    ticketid INT REFERENCES tickets(ticketid),
    userid INT REFERENCES users(userid),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
