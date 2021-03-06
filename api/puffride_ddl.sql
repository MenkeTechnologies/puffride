use puffride;

DROP TABLE IF EXISTS `PHONE`;
CREATE TABLE `PHONE`
(
    `PHONE_ID`     int(11)   NOT NULL AUTO_INCREMENT,
    `COUNTRY_CODE` int(2) UNSIGNED,
    `AREA_CODE`    int(2) UNSIGNED,
    `DIGITS`       int(10) UNSIGNED,
    `CREATE_DATE`  datetime  NOT NULL,
    `UPDATE_DATE`  timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (`PHONE_ID`)

) ENGINE = InnoDB;

DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER`
(
    `USER_ID`             int(11)       NOT NULL AUTO_INCREMENT,
    `NAME`                varchar(150)  NULL,
    `PROFILE_PICTURE`     varchar(250)  NULL,
    `PW_HASH`             varchar(400)  NULL,
    `EMAIL`               varchar(400)  NOT NULL,
    `BIO`                 varchar(1000) NULL,
    `EMAIL_VERIFIED_FLAG` varchar(1)    NULL DEFAULT 'N',
    `PHONE_ID`            int(11),
    `CREATE_DATE`         datetime      NULL,
    `UPDATE_DATE`         timestamp     NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`USER_ID`),
    FOREIGN KEY (`PHONE_ID`) REFERENCES `PHONE` (`PHONE_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `CAR`;
CREATE TABLE `CAR`
(
    `CAR_ID`             int(11)      NOT NULL AUTO_INCREMENT,
    `MPG`                int(11)      NOT NULL,
    `PLATE_NUMBER`       int(11)      NOT NULL,
    `YEAR`               int(11)      NOT NULL,
    `SEATS`              int(2) UNSIGNED,
    `SPECIAL_NEEDS_FLAG` varchar(1)   NOT NULL DEFAULT 'N',
    `CAR_PICTURE`        varchar(250) NOT NULL,
    `COLOR`              varchar(400) NOT NULL,
    `MAKE`               varchar(400) NOT NULL,
    `MODEL`              varchar(400) NOT NULL,
    `CREATE_DATE`        datetime     NOT NULL,
    `UPDATE_DATE`        timestamp    NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`CAR_ID`)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `LOCATION`;
CREATE TABLE `LOCATION`
(
    `LOCATION_ID`          int(11)      NOT NULL AUTO_INCREMENT,
    `DRIVER_VERIFIED_FLAG` varchar(1)   NOT NULL DEFAULT 'N',
    `LATITUDE`             double       NOT NULL,
    `LONGITUDE`            double       NOT NULL,
    `ICON`                 varchar(400) NOT NULL,
    `CREATE_DATE`          datetime     NULL,
    `UPDATE_DATE`          timestamp    NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`LOCATION_ID`)
) ENGINE = InnoDB;


DROP TABLE IF EXISTS `SCHEDULE`;
CREATE TABLE `SCHEDULE`
(
    `SCHEDULE_ID`    int(11)   NOT NULL AUTO_INCREMENT,
    `USER_ID`      int(11)   NOT NULL,
    `ORIGIN_ID`      int(11)   NOT NULL,
    `DESTINATION_ID` int(11)   NOT NULL,
    `DOW`            int(1)    NOT NULL,
    `START_DATE`     datetime  NOT NULL,
    `END_DATE`       datetime  NOT NULL,
    `TIME_OF_DAY`    time      NOT NULL,
    `CREATE_DATE`    datetime  NOT NULL,
    `UPDATE_DATE`    timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`SCHEDULE_ID`),
    FOREIGN KEY (`ORIGIN_ID`) REFERENCES `LOCATION` (`LOCATION_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (`DESTINATION_ID`) REFERENCES `LOCATION` (`LOCATION_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;



DROP TABLE IF EXISTS `RIDER`;
CREATE TABLE `RIDER`
(
    `RIDER_ID`             int(11)    NOT NULL AUTO_INCREMENT,
    `DRIVER_VERIFIED_FLAG` varchar(1) NOT NULL DEFAULT 'N',
    `USER_ID`              int(11)    NOT NULL,
    `CREATE_DATE`          datetime   NOT NULL,
    `UPDATE_DATE`          timestamp  NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`RIDER_ID`),
    FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `DRIVER`;
CREATE TABLE `DRIVER`
(
    `DRIVER_ID`            int(11)    NOT NULL AUTO_INCREMENT,
    `DRIVER_VERIFIED_FLAG` varchar(1) NOT NULL DEFAULT 'N',
    `USER_ID`              int(11)    NOT NULL,
    `CREATE_DATE`          datetime   NOT NULL,
    `UPDATE_DATE`          timestamp  NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`DRIVER_ID`),
    FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `RIDE`;
CREATE TABLE `RIDE`
(
    `RIDE_ID`        int(11)   NOT NULL AUTO_INCREMENT,
    `CAR_ID`         int(11)   NOT NULL,
    `SCHEDULE_ID`    int(11)   NOT NULL,
    `DRIVER_ID`      int(11)   NOT NULL,
    `RIDER_ID`       int(11)   NOT NULL,
    `START_TIME`     timestamp NULL,
    `END_TIME`       timestamp NULL,
    `ESTIMATED_COST` double    NULL,
    `CREATE_DATE`    datetime  NOT NULL,
    `UPDATE_DATE`    timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`RIDE_ID`),
    FOREIGN KEY (`CAR_ID`) REFERENCES `CAR` (`CAR_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (`DRIVER_ID`) REFERENCES `DRIVER` (`DRIVER_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (`RIDER_ID`) REFERENCES `RIDER` (`RIDER_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (`SCHEDULE_ID`) REFERENCES `SCHEDULE` (`SCHEDULE_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `RATING`;
CREATE TABLE `RATING`
(
    `RATING_ID`   int(11)   NOT NULL AUTO_INCREMENT,
    `RIDE_ID`     int(11)   NOT NULL,
    `AMOUNT`      int(11)   NOT NULL,
    `CREATE_DATE` datetime  NOT NULL,
    `UPDATE_DATE` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`RATING_ID`),
    FOREIGN KEY (`RIDE_ID`) REFERENCES `RIDE` (`RIDE_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;


