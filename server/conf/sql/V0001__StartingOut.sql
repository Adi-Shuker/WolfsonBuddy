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

insert into departments
values (1 ,'אגף ילדים'),
(2,'היחידה לאולטרסאוד נשים'),
(3, 'היחידה לאורוגינקולוגיה וכירורגית רצפת האגן'),
(4, 'מחלקה לאורולוגיה'),
(5, 'מערך אורתופדי'),
(6, 'יחידה לאימונולוגיה קלינית'),
(7, 'מחלקה לאף, אוזן וגרון'),
(8, 'המערך הכירורגי'),
(9,'חדר לידה'),
(10, 'חדר מיון'),
(11, 'יחידה לטיפול יום'),
(12, 'מחלקה לטיפול מיוחד ביילוד (פגים) וביילודים'),
(13,'יחידה לטיפול נמרץ כללי'),
(14, 'יחידה למחלות זיהומיות'),
(15, 'מחלקה לנויורולוגיה'),
(16, 'מחלקה לניתוחי לב וחזה'),
(17, 'אגף נשים ויולדות'),
(18, 'היחידה לאנדוקרינולוגיה וסוכרת'),
(19, 'יחידה לטיפול בכף רגל סוכרתית'),
(20, 'יחידה לרפואת עור ומין'),
(21, 'מחלקת עיניים'),
(22, 'יחידה לפוריות והפריה חוץ-גופית'),
(23, 'מחלקות פנימיות (א-ו)'),
(24, 'מחלקה לריאות וטיפול נמרץ נשימתי'),
(25, 'פזיותרפיה'),
(26, 'מרפאה ראומטולוגית');


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


create table question_types(
    id int NOT NULL AUTO_INCREMENT,
	type varchar(255),
	name varchar(255),
	PRIMARY KEY (id)
);

insert into question_types values
(null, 'matrix', 'מטריצה'),
(null, 'dropdown', 'בחירה מתוך רשימה'),
(null, 'rating', 'דירוג 1-5'),
(null, 'comment', 'שאלה פתוחה');

create table surveys(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(500),
	department_id int,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES departments (id)
);

insert into surveys(title, department_id) values
,( 1,'סקר שביעות רצון אגף ילדים')
,( 2,'סקר שביעות רצון היחידה לאולטרסאוד נשים')
,( 3,'סקר שביעות רצון היחידה לאורוגינקולוגיה וכירורגית רצפת האגן')
,( 4,'סקר שביעות רצון המחלקה לאורולוגיה')
,( 5,'סקר שביעות רצון מערך אורתופדי')
,( 6,'סקר שביעות רצון היחידה לאימונולוגיה קלינית')
,( 7,'סקר שביעות רצון מחלקה לאף אוזן וגרון')
,( 8,'סקר שביעות רצון המערך הכירורגי')
,( 9,'סקר שביעות רצון חדר לידה')
,( 10,'סקר שביעות רצון חדר מיון')
,( 11,'סקר שביעות רצון היחידה לטיפול יום')
,( 12,'סקר שביעות רצון המחלקה לטיפול מיוחד ביילוד (פגים) וביילודים')
,( 13,'סקר שביעות רצון יחידה לטיפול נמרץ כללי')
,( 14,'סקר שביעות רצון יחידה למחלות זיהומיות')
,( 15,'סקר שביעות רצון מחלקה לנויורולוגיה')
,( 16,'סקר שביעות רצון מחלקה לניתוחי לב וחזה')
,( 17,'סקר שביעות רצון אגף נשים ויולדות')
,( 18,'סקר שביעות רצון היחידה לאנדוקרינולוגיה וסוכרת')
,( 19,'סקר שביעות רצון יחידה לטיפול בכף רגל סוכרתית')
,( 20,'סקר שביעות רצון יחידה לרפואת עור ומין')
,( 21,'סקר שביעות רצון מחלקת עיניים')
,( 22,'סקר שביעות רצון יחידה לפוריות והפריה חוץ-גופית')
,( 23,'סקר שביעות רצון מחלקות פנימיות (א-ו)')
,( 24,'סקר שביעות רצון מחלקה לריאות וטיפול נמרץ נשימתי')
,( 25,'סקר שביעות רצון פזיותרפיה')
;( 26,'סקר שביעות רצון מרפאה ראומטולוגית)


create table questions(
    id int NOT NULL AUTO_INCREMENT,
	type_id int,
	survey_id int,
	text varchar(500),
	PRIMARY KEY (id),
	FOREIGN KEY (type_id) REFERENCES question_types (id),
	FOREIGN KEY (survey_id) REFERENCES surveys (id)
);

insert into questions values (null,2,1, "מה המגדר שלך?"),
(null,1,1, 'באיזו מידה הרגשת שהאחיות התייחסו אליך באדיבות ובכבוד?'),
(null,1,1, 'באיזו מידה האחיות הקשיבו לך והתייחסו לשאלות ולחששות שלך?'),
(null,1,1, 'באיזו מידה ההסברים שקיבלת במהלך הביקור מהאחיות היו ברורים ומובנים לך?'),
(null,3,1, "באיזו מידה הרגשת שהרופאים התייחסו אליך באדיבות ובכבוד? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה"),
(null,3,1, "באיזו מידה ההסברים שקיבלת במהלך הביקור מהרופאים היו ברורים ומובנים לך? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה"),
(null,3,1, "אם חלילה יהיה צורך, האם תמליץ/י לחברים ולקרובי משפחה להגיע לבית החולים?  דרג/י על סולם 1-בכלל לא עד 5-במידה רבה"),
(null,4,1, "האם יש לך הערות נוספות או הצעות לשיפור?"),
(null,3,2, "באיזו מידה הרגשת שהרופאים התייחסו אליך באדיבות ובכבוד? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה"),
(null,3,2, "באיזו מידה הרופאים הקשיבו לך והתייחסו לשאלות ולחששות שלך? דרג/י על סולם 1-בכלל לא עד 5-במידה רבה"),
(null,2,3, "מה המגדר שלך?"),
(null,1,3, 'באיזו מידה הרגשת שהאחיות התייחסו אליך באדיבות ובכבוד?'),
(null,1,3, 'באיזו מידה האחיות הקשיבו לך והתייחסו לשאלות ולחששות שלך?'),
(null,1,3, 'באיזו מידה ההסברים שקיבלת במהלך הביקור מהאחיות היו ברורים ומובנים לך?'),
(null,4,3, "האם יש לך הערות נוספות או הצעות לשיפור?");



create table question_suggested_answers(
	id int NOT NULL AUTO_INCREMENT,
	question_id int,
	suggested_answer varchar(255),
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES questions (id)
);

insert into question_suggested_answers values
(null, 1, 'גבר'),
(null, 1, 'אישה'),
(null, 2, 'בכלל לא'),
(null, 2, 'במידה מועטה'),
(null, 2, 'במידה בינונית'),
(null, 2, 'במידה רבה'),
(null, 2, 'במידה רבה מאוד'),
(null, 2, 'לא רלוונטי'),
(null, 3, 'בכלל לא'),
(null, 3, 'במידה מועטה'),
(null, 3, 'במידה בינונית'),
(null, 3, 'במידה רבה'),
(null, 3, 'במידה רבה מאוד'),
(null, 3, 'לא רלוונטי'),
(null, 4, 'בכלל לא'),
(null, 4, 'במידה מועטה'),
(null, 4, 'במידה בינונית'),
(null, 4, 'במידה רבה'),
(null, 4, 'במידה רבה מאוד'),
(null, 4, 'לא רלוונטי'),
(null, 5, '1'),
(null, 5, '2'),
(null, 5, '3'),
(null, 5, '4'),
(null, 5, '5'),
(null, 6, '1'),
(null, 6, '2'),
(null, 6, '3'),
(null, 6, '4'),
(null, 6, '5'),
(null, 7, '1'),
(null, 7, '2'),
(null, 7, '3'),
(null, 7, '4'),
(null, 7, '5'),
(null, 9, '1'),
(null, 9, '2'),
(null, 9, '3'),
(null, 9, '4'),
(null, 9, '5'),
(null, 10, '1'),
(null, 10, '2'),
(null, 10, '3'),
(null, 10, '4'),
(null, 10, '5'),
(null, 11, 'גבר'),
(null, 11, 'אישה'),
(null, 12, 'בכלל לא'),
(null, 12, 'במידה מועטה'),
(null, 12, 'במידה בינונית'),
(null, 12, 'במידה רבה'),
(null, 12, 'במידה רבה מאוד'),
(null, 12, 'לא רלוונטי'),
(null, 13, 'בכלל לא'),
(null, 13, 'במידה מועטה'),
(null, 13, 'במידה בינונית'),
(null, 13, 'במידה רבה'),
(null, 13, 'במידה רבה מאוד'),
(null, 13, 'לא רלוונטי'),
(null, 14, 'בכלל לא'),
(null, 14, 'במידה מועטה'),
(null, 14, 'במידה בינונית'),
(null, 14, 'במידה רבה'),
(null, 14, 'במידה רבה מאוד'),
(null, 14, 'לא רלוונטי');


create table users_answers(
	id int NOT NULL AUTO_INCREMENT,
	question_id int,
	answer varchar(2000),
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES questions (id)
);

insert into users_answers values
(null, 1, 'גבר'),
(null, 1, 'אישה'),
(null, 1, 'גבר'),
(null, 1, 'גבר'),
(null, 1, 'אישה'),
(null, 1, 'אישה'),
(null, 1, 'אישה'),
(null, 2, 'במידה מועטה'),
(null, 2, 'במידה בינונית'),
(null, 2, 'במידה בינונית'),
(null, 2, 'במידה בינונית'),
(null, 2, 'במידה רבה'),
(null, 2, 'במידה רבה מאוד'),
(null, 2, 'לא רלוונטי'),
(null, 3, 'במידה מועטה'),
(null, 3, 'במידה מועטה'),
(null, 3, 'במידה בינונית'),
(null, 3, 'במידה רבה'),
(null, 3, 'במידה רבה מאוד'),
(null, 3, 'במידה רבה מאוד'),
(null, 3, 'לא רלוונטי'),
(null, 4, 'לא רלוונטי'),
(null, 4, 'במידה מועטה'),
(null, 4, 'במידה בינונית'),
(null, 4, 'במידה רבה'),
(null, 4, 'במידה רבה מאוד'),
(null, 4, 'במידה רבה'),
(null, 4, 'במידה רבה מאוד'),
(null, 5, '4'),
(null, 5, '5'),
(null, 5, '2'),
(null, 5, '3'),
(null, 5, '4'),
(null, 5, '4'),
(null, 5, '5'),
(null, 6, '4'),
(null, 6, '5'),
(null, 6, '2'),
(null, 6, '3'),
(null, 6, '3'),
(null, 6, '4'),
(null, 6, '5'),
(null, 7, '3'),
(null, 7, '4'),
(null, 7, '5'),
(null, 7, '2'),
(null, 7, '3'),
(null, 7, '4'),
(null, 7, '5'),
(null, 9, '1'),
(null, 9, '2'),
(null, 9, '3'),
(null, 9, '4'),
(null, 9, '3'),
(null, 9, '4'),
(null, 9, '5'),
(null, 10, '2'),
(null, 10, '3'),
(null, 10, '4'),
(null, 10, '5'),
(null, 10, '3'),
(null, 10, '4'),
(null, 10, '5'),
(null, 11, 'גבר'),
(null, 11, 'אישה'),
(null, 11, 'גבר'),
(null, 11, 'אישה'),
(null, 11, 'גבר'),
(null, 11, 'גבר'),
(null, 11, 'אישה'),
(null, 12, 'בכלל לא'),
(null, 12, 'במידה מועטה'),
(null, 12, 'במידה בינונית'),
(null, 12, 'במידה רבה'),
(null, 12, 'במידה רבה מאוד'),
(null, 12, 'במידה רבה מאוד'),
(null, 12, 'לא רלוונטי'),
(null, 13, 'במידה רבה'),
(null, 13, 'במידה רבה מאוד'),
(null, 13, 'במידה מועטה'),
(null, 13, 'במידה בינונית'),
(null, 13, 'במידה רבה'),
(null, 13, 'במידה רבה מאוד'),
(null, 13, 'לא רלוונטי'),
(null, 14, 'במידה רבה'),
(null, 14, 'במידה רבה מאוד'),
(null, 14, 'לא רלוונטי');
(null, 14, 'במידה מועטה'),
(null, 14, 'במידה בינונית'),
(null, 14, 'במידה רבה'),
(null, 14, 'במידה רבה מאוד'),
(null, 14, 'לא רלוונטי');



