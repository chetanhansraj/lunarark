CREATE TABLE news_articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    snippet TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO news_articles (title, snippet, image_url)
VALUES
('Article 1', 'This is a sample snippet for Article 1. You can replace it with relevant content.', '1.png'),
('Article 2', 'This is a sample snippet for Article 2. You can replace it with relevant content.', '2.png'),
('Article 3', 'This is a sample snippet for Article 3. You can replace it with relevant content.', '3.png'),
('Article 4', 'This is a sample snippet for Article 4. You can replace it with relevant content.', '4.png'),
('Article 5', 'This is a sample snippet for Article 5. You can replace it with relevant content.', '5.png'),
('Article 6', 'This is a sample snippet for Article 6. You can replace it with relevant content.', '6.png'),
('Article 7', 'This is a sample snippet for Article 7. You can replace it with relevant content.', '7.png'),
('Article 8', 'This is a sample snippet for Article 8. You can replace it with relevant content.', '8.png'),
('Article 9', 'This is a sample snippet for Article 9. You can replace it with relevant content.', '9.png')