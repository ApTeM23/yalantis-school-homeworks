CREATE TABLE Concerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    duration TIME,
    description TEXT,
    address VARCHAR(255),
    age_limit INT,
    price DECIMAL(10,2)
);

CREATE TABLE Visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    age INT
);

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE Concerts_Categories (
    concert_id INT,
    category_id INT,
    PRIMARY KEY(concert_id, category_id),
    FOREIGN KEY(concert_id) REFERENCES Concerts(id),
    FOREIGN KEY(category_id) REFERENCES Categories(id)
);
