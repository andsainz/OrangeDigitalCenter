CREATE DATABASE ODC;
USE ODC;
CREATE TABLE users
(
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(50) NOT NULL,
    fullName VARCHAR(50) NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE admins (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(50) NOT NULL,
    fullName VARCHAR(50) NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR
        (30)
);
        CREATE TABLE activities (
    activity_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    activity_image VARCHAR
        (250),
    title VARCHAR
        (50) NOT NULL,
    subtitle VARCHAR
        (100) NOT NULL,
    activity_date varchar
        (50),
    available_places INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON
        UPDATE CURRENT_TIMESTAMP,
    user_id VARCHAR(36),
    admin_id VARCHAR(36),
    category_id INT,
    FOREIGN KEY
        (user_id) REFERENCES users
        (id),
    FOREIGN KEY
        (admin_id) REFERENCES admins
        (id),
    FOREIGN KEY
        (category_id) REFERENCES categories
        (category_id)
);








