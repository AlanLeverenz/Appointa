USE xzjt9tep1d8f63ht;

CREATE TABLE IF NOT EXISTS patients (
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(45),
    lastname VARCHAR(45),
    email VARCHAR(55),
	phone VARCHAR(25),
	username VARCHAR(55),
    password VARCHAR(45),
    insurance_provider VARCHAR(45),
    insurance_group_id VARCHAR(25),
    createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE IF NOT EXISTS doctors (
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(45),
	lastname VARCHAR(45),
	specialty VARCHAR(80),
    email VARCHAR(55),
	phone VARCHAR(25),
	username VARCHAR(55),
    password VARCHAR(45),
	createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE appointments (
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    requested_date DATE,
    approved_date DATE,
    patient_request VARCHAR(255),
	doctor_response VARCHAR(255),
	status VARCHAR(45),
    symptoms VARCHAR(255),
    examination VARCHAR(255),
    test_results VARCHAR(255),
	diagnosis VARCHAR(255),
    medications VARCHAR(255),
	treatment_plan VARCHAR(255),
    forwarded_to_billing BOOLEAN,
	createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE IF NOT EXISTS specialties (
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    specialty varchar(255) NOT NULL,
    available boolean,
    PRIMARY KEY (ID)
);

CREATE TABLE reviews (
	ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pseudoname VARCHAR(55),
    body VARCHAR(255),
    stars int,
	createdAt DATETIME,
    updatedAt DATETIME
);

