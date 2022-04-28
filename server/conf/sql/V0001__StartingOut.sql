CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255),
	email varchar(255),
	password varchar(255),
	role varchar(255),
    created_at DATETIME,
    updated_at DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE announcements_and_updates (
    headline varchar(45) NOT NULL,
    post_date date NOT NULL,
    to_date date DEFAULT NULL,
    content mediumtext,
    link varchar(45) DEFAULT NULL,
    PRIMARY KEY (headline, post_date)
);

CREATE TABLE departments (
  id int NOT NULL,
  name varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE staff (
  id int NOT NULL,
  name varchar(45) NOT NULL,
  department_id int NOT NULL,
  role varchar(45) DEFAULT NULL,
  description varchar(45) DEFAULT NULL,
  picture varchar(45) DEFAULT NULL,
  phone_number varchar(10) DEFAULT NULL,
  clinical_practice varchar(45) DEFAULT NULL,
  scientific_practice varchar(45) DEFAULT NULL,
  academic_experience varchar(45) DEFAULT NULL,
  professional_unions varchar(45) DEFAULT NULL,
  education varchar(45) DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE appointments (
  user_id int NOT NULL,
  department_id int NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  doctor_id int DEFAULT NULL,
  PRIMARY KEY (user_id, date, time, department_id),
  FOREIGN KEY user_fkey (user_id) REFERENCES users (id),
  FOREIGN KEY department_fkey (department_id) REFERENCES departments (id),
  FOREIGN KEY doctors_fkey (doctor_id) REFERENCES staff (id)
);



