-- main - Database Schema for omsvg
-- Created: $(date)

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_posts_user_id ON posts(user_id);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at);

-- Sample data insertion
INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john@example.com', 'hashed_password_123'),
('jane_smith', 'jane@example.com', 'hashed_password_456');

INSERT INTO posts (user_id, title, content) VALUES
(1, 'First Post', 'This is the content of the first post.'),
(2, 'Welcome Post', 'Welcome to our application!');

-- Useful queries
-- Get all posts with user information
SELECT
    p.title,
    p.content,
    p.created_at,
    u.username
FROM posts p
JOIN users u ON p.user_id = u.id
ORDER BY p.created_at DESC;

-- Get user post count
SELECT
    u.username,
    COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.username;

# Additional Implementation 1760498325

# Additional Implementation 1760498325

# Additional Implementation 1760498325

# Code Update 1760498325-15943

# Additional Implementation 1760498325

# Code Update 1760498325-14576

# Code Update 1760498326-29826

# Additional Implementation 1760498326

# Additional Implementation 1760498326

# Code Update 1760498326-21600

# Additional Implementation 1760498326

# Additional Implementation 1760498326

# Additional Implementation 1760498326

# Additional Implementation 1760498326

# Additional Implementation 1760498326

# Code Update 1760498327-17692

# Additional Implementation 1760498327

# Additional Implementation 1760498327

# Code Update 1760498327-6248

# Code Update 1760498327-13022

# Additional Implementation 1760498327

# Additional Implementation 1760498328

# Additional Implementation 1760498328

# Code Update 1760498328-14497

# Code Update 1760498328-13418

# Additional Implementation 1760498328

# Code Update 1760498328-4734

# Code Update 1760498328-25657

# Additional Implementation 1760498328

# Code Update 1760498328-21842

# Code Update 1760498328-16505

# Code Update 1760498328-16147

# Code Update 1760498328-8885
