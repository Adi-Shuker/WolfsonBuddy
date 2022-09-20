CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255),
	email varchar(255),
	password varchar(255),
	role varchar(255),
    created_at DATETIME,
    updated_at DATETIME,
	PRIMARY KEY (id)
);

insert ignore into users("user_name", "email", "password", "role") values("עדי שוקר", "user@gmail.com", "U2FsdGVkX1/yx3eCOnR6oCOaFcgtUGj6c/mlIVrjCBU=","user"),("עדי שוקר", "admin@gmail.com", "U2FsdGVkX197y6lHt6dg5dg7hF5I6y6XXhxGHbmQ1/I=", "admin")


CREATE TABLE IF NOT EXISTS announcements_and_updates (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(2048) NOT NULL,
    post_date date NOT NULL,
    content mediumtext,
    link varchar(2048) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS departments (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

insert ignore into departments (name)
values ('אגף ילדים'),
('היחידה לאולטרסאוד נשים'),
('היחידה לאורוגינקולוגיה וכירורגית רצפת האגן'),
('מחלקה לאורולוגיה'),
('מערך אורתופדי'),
('יחידה לאימונולוגיה קלינית'),
('מחלקה לאף, אוזן וגרון'),
('המערך הכירורגי'),
('חדר לידה'),
('חדר מיון'),
('יחידה לטיפול יום'),
('מחלקה לטיפול מיוחד ביילוד (פגים) וביילודים'),
('יחידה לטיפול נמרץ כללי'),
('יחידה למחלות זיהומיות'),
('מחלקה לנויורולוגיה'),
('מחלקה לניתוחי לב וחזה'),
('אגף נשים ויולדות'),
('היחידה לאנדוקרינולוגיה וסוכרת'),
('יחידה לטיפול בכף רגל סוכרתית'),
('יחידה לרפואת עור ומין'),
('מחלקת עיניים'),
('יחידה לפוריות והפריה חוץ-גופית'),
('מחלקות פנימיות (א-ו)'),
('מחלקה לריאות וטיפול נמרץ נשימתי'),
('פזיותרפיה'),
('מרפאה ראומטולוגית');


CREATE TABLE IF NOT EXISTS staff (
  id int NOT NULL AUTO_INCREMENT,
  name text(4048) NOT NULL,
  department_id int NOT NULL,
  role text(4048) DEFAULT NULL,
  description text(4048) DEFAULT NULL,
  picture text(4048) DEFAULT NULL,
  phone_number text(4048) DEFAULT NULL,
  clinical_practice text(4048) DEFAULT NULL,
  scientific_practice text(4048) DEFAULT NULL,
  academic_experience text(4048) DEFAULT NULL,
  professional_unions text(4048) DEFAULT NULL,
  education text(4048) DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE IF NOT EXISTS appointments (
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

insert ignore into appointments values('1', '7', '2022-11-04', '19:30:10', '1')


create table IF NOT EXISTS question_types(
    id int NOT NULL AUTO_INCREMENT,
	type varchar(255),
	name varchar(255),
	PRIMARY KEY (id)
);

insert ignore into question_types (type, name)
 values
('matrix', 'מטריצה'),
('dropdown', 'בחירה מתוך רשימה'),
('rating', 'דירוג 1-5'),
('comment', 'שאלה פתוחה');

create table IF NOT EXISTS surveys(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(500),
	department_id int,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES departments (id)
);

insert ignore into surveys (title, department_id)
values
('סקר שביעות רצון אגף ילדים', 1),
('סקר שביעות רצון היחידה לאולטרסאוד נשים',2),
('סקר שביעות רצון היחידה לאורוגינקולוגיה וכירורגית רצפת האגן',3),
('סקר שביעות רצון מחלקה לאורולוגיה',4),
('סקר שביעות רצון מערך אורתופדי',5),
('סקר שביעות רצון יחידה לאימונולוגיה קלינית',6),
('סקר שביעות רצון מחלקה לאף, אוזן וגרון',7),
('סקר שביעות רצון המערך הכירורגי',8),
('סקר שביעות רצון חדר לידה',9),
('סקר שביעות רצון חדר מיון',10),
('סקר שביעות רצון יחידה לטיפול יום',11),
('סקר שביעות רצון מחלקה לטיפול מיוחד ביילוד (פגים) וביילודים',12),
('סקר שביעות רצון יחידה לטיפול נמרץ כללי',13),
('סקר שביעות רצון יחידה למחלות זיהומיות',14),
('סקר שביעות רצון מחלקה לנויורולוגיה',15),
('סקר שביעות רצון מחלקה לניתוחי לב וחזה',16),
('סקר שביעות רצון אגף נשים ויולדות',17),
('סקר שביעות רצון היחידה לאנדוקרינולוגיה וסוכרת',18),
('סקר שביעות רצון יחידה לטיפול בכף רגל סוכרתית',19),
('סקר שביעות רצון יחידה לרפואת עור ומין',20),
('סקר שביעות רצון מחלקת עיניים',21),
('סקר שביעות רצון יחידה לפוריות והפריה חוץ-גופית',22),
('סקר שביעות רצון מחלקות פנימיות (א-ו)',23),
('סקר שביעות רצון מחלקה לריאות וטיפול נמרץ נשימתי',24),
('סקר שביעות רצון פזיותרפיה',25),
('סקר שביעות רצון מרפאה ראומטולוגית',26);


create table IF NOT EXISTS questions(
    id int NOT NULL AUTO_INCREMENT,
	type_id int,
	survey_id int,
	text varchar(500),
	PRIMARY KEY (id),
	FOREIGN KEY (type_id) REFERENCES question_types (id),
	FOREIGN KEY (survey_id) REFERENCES surveys (id)
);

insert ignore into questions (type_id, survey_id, text)
values
(2, 1, 'מה המגדר שלך?'),
(1, 1, 'באיזו מידה הרגשת שהאחיות התייחסו אליך באדיבות ובכבוד?'),
(1, 1, 'באיזו מידה האחיות הקשיבו לך והתייחסו לשאלות ולחששות שלך?'),
(1, 1, 'באיזו מידה ההסברים שקיבלת במהלך הביקור מהאחיות היו ברורים ומובנים לך?'),
(3, 1, 'באיזו מידה הרגשת שהרופאים התייחסו אליך באדיבות ובכבוד? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה'),
(3, 1, 'באיזו מידה ההסברים שקיבלת במהלך הביקור מהרופאים היו ברורים ומובנים לך? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה'),
(3, 1, 'אם חלילה יהיה צורך, האם תמליץ/י לחברים ולקרובי משפחה להגיע לבית החולים?  דרג/י על סולם 1-בכלל לא עד 5-במידה רבה'),
(4, 1, 'האם יש לך הערות נוספות או הצעות לשיפור?'),
(3, 2, 'באיזו מידה הרגשת שהרופאים התייחסו אליך באדיבות ובכבוד? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה'),
(3, 2, 'באיזו מידה הרופאים הקשיבו לך והתייחסו לשאלות ולחששות שלך? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה'),
(2, 3, 'מה המגדר שלך?'),
(1, 3, 'באיזו מידה הרגשת שהאחיות התייחסו אליך באדיבות ובכבוד?'),
(1, 3, 'באיזו מידה האחיות הקשיבו לך והתייחסו לשאלות ולחששות שלך?'),
(1, 3, 'באיזו מידה ההסברים שקיבלת במהלך הביקור מהאחיות היו ברורים ומובנים לך?'),
(4, 3, 'האם יש לך הערות נוספות או הצעות לשיפור?');



create table IF NOT EXISTS question_suggested_answers(
	id int NOT NULL AUTO_INCREMENT,
	question_id int,
	suggested_answer varchar(255),
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES questions (id)
);

insert ignore into question_suggested_answers (question_id, suggested_answer)
 values
(1, 'גבר'),
(1, 'אישה'),
(2, 'בכלל לא'),
(2, 'במידה מועטה'),
(2, 'במידה בינונית'),
(2, 'במידה רבה'),
(2, 'במידה רבה מאוד'),
(2, 'לא רלוונטי'),
(3, 'בכלל לא'),
(3, 'במידה מועטה'),
(3, 'במידה בינונית'),
(3, 'במידה רבה'),
(3, 'במידה רבה מאוד'),
(3, 'לא רלוונטי'),
(4, 'בכלל לא'),
(4, 'במידה מועטה'),
(4, 'במידה בינונית'),
(4, 'במידה רבה'),
(4, 'במידה רבה מאוד'),
(4, 'לא רלוונטי'),
(5, '1'),
(5, '2'),
(5, '3'),
(5, '4'),
(5, '5'),
(6, '1'),
(6, '2'),
(6, '3'),
(6, '4'),
(6, '5'),
(7, '1'),
(7, '2'),
(7, '3'),
(7, '4'),
(7, '5'),
(9, '1'),
(9, '2'),
(9, '3'),
(9, '4'),
(9, '5'),
(10, '1'),
(10, '2'),
(10, '3'),
(10, '4'),
(10, '5'),
(11, 'גבר'),
(11, 'אישה'),
(12, 'בכלל לא'),
(12, 'במידה מועטה'),
(12, 'במידה בינונית'),
(12, 'במידה רבה'),
(12, 'במידה רבה מאוד'),
(12, 'לא רלוונטי'),
(13, 'בכלל לא'),
(13, 'במידה מועטה'),
(13, 'במידה בינונית'),
(13, 'במידה רבה'),
(13, 'במידה רבה מאוד'),
(13, 'לא רלוונטי'),
(14, 'בכלל לא'),
(14, 'במידה מועטה'),
(14, 'במידה בינונית'),
(14, 'במידה רבה'),
(14, 'במידה רבה מאוד'),
(14, 'לא רלוונטי');


create table IF NOT EXISTS users_answers(
	id int NOT NULL AUTO_INCREMENT,
	question_id int,
	answer varchar(2000),
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES questions (id)
);

insert ignore into users_answers (question_id, answer)
values
(1, 'גבר'),
(1, 'אישה'),
(1, 'גבר'),
(1, 'גבר'),
(1, 'אישה'),
(1, 'אישה'),
(1, 'אישה'),
(2, 'במידה מועטה'),
(2, 'במידה בינונית'),
(2, 'במידה בינונית'),
(2, 'במידה בינונית'),
(2, 'במידה רבה'),
(2, 'במידה רבה מאוד'),
(2, 'לא רלוונטי'),
(3, 'במידה מועטה'),
(3, 'במידה מועטה'),
(3, 'במידה בינונית'),
(3, 'במידה רבה'),
(3, 'במידה רבה מאוד'),
(3, 'במידה רבה מאוד'),
(3, 'לא רלוונטי'),
(4, 'לא רלוונטי'),
(4, 'במידה מועטה'),
(4, 'במידה בינונית'),
(4, 'במידה רבה'),
(4, 'במידה רבה מאוד'),
(4, 'במידה רבה'),
(4, 'במידה רבה מאוד'),
(5, '4'),
(5, '5'),
(5, '2'),
(5, '3'),
(5, '4'),
(5, '4'),
(5, '5'),
(6, '4'),
(6, '5'),
(6, '2'),
(6, '3'),
(6, '3'),
(6, '4'),
(6, '5'),
(7, '3'),
(7, '4'),
(7, '5'),
(7, '2'),
(7, '3'),
(7, '4'),
(7, '5'),
(9, '1'),
(9, '2'),
(9, '3'),
(9, '4'),
(9, '3'),
(9, '4'),
(9, '5'),
(10, '2'),
(10, '3'),
(10, '4'),
(10, '5'),
(10, '3'),
(10, '4'),
(10, '5'),
(11, 'גבר'),
(11, 'אישה'),
(11, 'גבר'),
(11, 'אישה'),
(11, 'גבר'),
(11, 'גבר'),
(11, 'אישה'),
(12, 'בכלל לא'),
(12, 'במידה מועטה'),
(12, 'במידה בינונית'),
(12, 'במידה רבה'),
(12, 'במידה רבה מאוד'),
(12, 'במידה רבה מאוד'),
(12, 'לא רלוונטי'),
(13, 'במידה רבה'),
(13, 'במידה רבה מאוד'),
(13, 'במידה מועטה'),
(13, 'במידה בינונית'),
(13, 'במידה רבה'),
(13, 'במידה רבה מאוד'),
(13, 'לא רלוונטי'),
(14, 'במידה רבה'),
(14, 'במידה רבה מאוד'),
(14, 'לא רלוונטי'),
(14, 'במידה מועטה'),
(14, 'במידה בינונית'),
(14, 'במידה רבה'),
(14, 'במידה רבה מאוד'),
(14, 'לא רלוונטי');




