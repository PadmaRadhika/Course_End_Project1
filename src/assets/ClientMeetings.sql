CREATE DATABASE ClientDB;
USE ClientDB;
CREATE TABLE Client (
     client_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
	 email VARCHAR(255) NOT NULL,
	 address VARCHAR(255) NOT NULL,
	 password VARCHAR(255) NOT NULL,
     PRIMARY KEY (client_id)
);

CREATE TABLE MeetingSchedule (
     meeting_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     meetingtopic VARCHAR(255) NOT NULL,
	 numberofpeople SMALLINT(255) NOT NULL,
	 starttime DATE NOT NULL,
	 PRIMARY KEY (meeting_id)
);