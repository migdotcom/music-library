-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: bardhub
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album_album`
--

DROP TABLE IF EXISTS `album_album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album_album` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(255) DEFAULT NULL,
  `Name` varchar(80) NOT NULL,
  `Cover_image` varchar(100) DEFAULT NULL,
  `Count` int NOT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  `User_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `album_album_User_id_e606c4f2_fk_user_user_id` (`User_id`),
  CONSTRAINT `album_album_User_id_e606c4f2_fk_user_user_id` FOREIGN KEY (`User_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_album`
--

LOCK TABLES `album_album` WRITE;
/*!40000 ALTER TABLE `album_album` DISABLE KEYS */;
/*!40000 ALTER TABLE `album_album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist_artist`
--

DROP TABLE IF EXISTS `artist_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Time_stamp` datetime(6) NOT NULL,
  `RecordLabel_id` int DEFAULT NULL,
  `User_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_id` (`User_id`),
  KEY `artist_artist_RecordLabel_id_7faa27fd_fk_recordLab` (`RecordLabel_id`),
  CONSTRAINT `artist_artist_RecordLabel_id_7faa27fd_fk_recordLab` FOREIGN KEY (`RecordLabel_id`) REFERENCES `recordlabel_recordlabel` (`id`),
  CONSTRAINT `artist_artist_User_id_b101fd22_fk_user_user_id` FOREIGN KEY (`User_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_artist`
--

LOCK TABLES `artist_artist` WRITE;
/*!40000 ALTER TABLE `artist_artist` DISABLE KEYS */;
/*!40000 ALTER TABLE `artist_artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist_artist_event`
--

DROP TABLE IF EXISTS `artist_artist_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_artist_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artist_id` int NOT NULL,
  `event_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `artist_artist_Event_artist_id_event_id_5b535424_uniq` (`artist_id`,`event_id`),
  KEY `artist_artist_Event_event_id_e408b5a0_fk_event_event_id` (`event_id`),
  CONSTRAINT `artist_artist_Event_artist_id_4c2c0ff8_fk_artist_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist_artist` (`id`),
  CONSTRAINT `artist_artist_Event_event_id_e408b5a0_fk_event_event_id` FOREIGN KEY (`event_id`) REFERENCES `event_event` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_artist_event`
--

LOCK TABLES `artist_artist_event` WRITE;
/*!40000 ALTER TABLE `artist_artist_event` DISABLE KEYS */;
/*!40000 ALTER TABLE `artist_artist_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add auth token',6,'add_authtoken'),(22,'Can change auth token',6,'change_authtoken'),(23,'Can delete auth token',6,'delete_authtoken'),(24,'Can view auth token',6,'view_authtoken'),(25,'Can add lead',7,'add_lead'),(26,'Can change lead',7,'change_lead'),(27,'Can delete lead',7,'delete_lead'),(28,'Can view lead',7,'view_lead'),(29,'Can add user',8,'add_user'),(30,'Can change user',8,'change_user'),(31,'Can delete user',8,'delete_user'),(32,'Can view user',8,'view_user'),(33,'Can add album',9,'add_album'),(34,'Can change album',9,'change_album'),(35,'Can delete album',9,'delete_album'),(36,'Can view album',9,'view_album'),(37,'Can add track',10,'add_track'),(38,'Can change track',10,'change_track'),(39,'Can delete track',10,'delete_track'),(40,'Can view track',10,'view_track'),(41,'Can add tag',11,'add_tag'),(42,'Can change tag',11,'change_tag'),(43,'Can delete tag',11,'delete_tag'),(44,'Can view tag',11,'view_tag'),(45,'Can add playlist',12,'add_playlist'),(46,'Can change playlist',12,'change_playlist'),(47,'Can delete playlist',12,'delete_playlist'),(48,'Can view playlist',12,'view_playlist'),(49,'Can add artist',13,'add_artist'),(50,'Can change artist',13,'change_artist'),(51,'Can delete artist',13,'delete_artist'),(52,'Can view artist',13,'view_artist'),(53,'Can add event',14,'add_event'),(54,'Can change event',14,'change_event'),(55,'Can delete event',14,'delete_event'),(56,'Can view event',14,'view_event'),(57,'Can add record label',15,'add_recordlabel'),(58,'Can change record label',15,'change_recordlabel'),(59,'Can delete record label',15,'delete_recordlabel'),(60,'Can view record label',15,'view_recordlabel'),(61,'Can add music player setting',16,'add_musicplayersetting'),(62,'Can change music player setting',16,'change_musicplayersetting'),(63,'Can delete music player setting',16,'delete_musicplayersetting'),(64,'Can view music player setting',16,'view_musicplayersetting'),(65,'Can add draft song',17,'add_draftsong'),(66,'Can change draft song',17,'change_draftsong'),(67,'Can delete draft song',17,'delete_draftsong'),(68,'Can view draft song',17,'view_draftsong');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_user_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2020-04-17 22:23:17.750737','4','apogiimusic@gmail.com --- apogii',1,'[{\"added\": {}}]',8,1),(2,'2020-04-17 22:24:00.564871','5','bbs@bgnat.com --- Brown Bag Special',1,'[{\"added\": {}}]',8,1),(3,'2020-04-17 22:24:33.204955','6','sikorasaur@sik.com --- sikorasaur',1,'[{\"added\": {}}]',8,1),(4,'2020-04-17 22:26:04.848209','7','arianagrande@gmail.com --- Ariana Grande',1,'[{\"added\": {}}]',8,1),(5,'2020-04-17 22:26:35.319444','8','cidetraq@gmail.com --- cidetraq',1,'[{\"added\": {}}]',8,1),(6,'2020-04-17 22:26:44.136038','8','cidetraq@gmail.com --- cidetraq',2,'[{\"changed\": {\"fields\": [\"Is staff\"]}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(9,'album','album'),(13,'artist','artist'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(17,'draftsong','draftsong'),(14,'event','event'),(6,'knox','authtoken'),(7,'leads','lead'),(16,'musicplayersetting','musicplayersetting'),(12,'playlist','playlist'),(15,'recordLabel','recordlabel'),(5,'sessions','session'),(11,'tag','tag'),(10,'track','track'),(8,'user','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'musicplayersetting','0001_initial','2020-04-17 21:45:48.821474'),(2,'user','0001_initial','2020-04-17 21:45:49.060327'),(3,'contenttypes','0001_initial','2020-04-17 21:45:49.890813'),(4,'admin','0001_initial','2020-04-17 21:45:50.112678'),(5,'admin','0002_logentry_remove_auto_add','2020-04-17 21:45:51.131615'),(6,'admin','0003_logentry_add_action_flag_choices','2020-04-17 21:45:51.165593'),(7,'album','0001_initial','2020-04-17 21:45:51.359474'),(8,'album','0002_album_user','2020-04-17 21:45:52.293522'),(9,'album','0003_auto_20200417_1420','2020-04-17 21:45:53.189666'),(10,'recordLabel','0001_initial','2020-04-17 21:45:53.371555'),(11,'event','0001_initial','2020-04-17 21:45:53.514465'),(12,'artist','0001_initial','2020-04-17 21:45:53.870246'),(13,'artist','0002_artist_user','2020-04-17 21:45:56.162183'),(14,'contenttypes','0002_remove_content_type_name','2020-04-17 21:45:57.088250'),(15,'auth','0001_initial','2020-04-17 21:45:57.636566'),(16,'auth','0002_alter_permission_name_max_length','2020-04-17 21:46:00.330188'),(17,'auth','0003_alter_user_email_max_length','2020-04-17 21:46:00.357171'),(18,'auth','0004_alter_user_username_opts','2020-04-17 21:46:00.375160'),(19,'auth','0005_alter_user_last_login_null','2020-04-17 21:46:00.402679'),(20,'auth','0006_require_contenttypes_0002','2020-04-17 21:46:00.416671'),(21,'auth','0007_alter_validators_add_error_messages','2020-04-17 21:46:00.440655'),(22,'auth','0008_alter_user_username_max_length','2020-04-17 21:46:00.461643'),(23,'auth','0009_alter_user_last_name_max_length','2020-04-17 21:46:00.493624'),(24,'auth','0010_alter_group_name_max_length','2020-04-17 21:46:00.661525'),(25,'auth','0011_update_proxy_permissions','2020-04-17 21:46:00.713488'),(26,'draftsong','0001_initial','2020-04-17 21:46:00.928354'),(27,'knox','0001_initial','2020-04-17 21:46:01.456690'),(28,'knox','0002_auto_20150916_1425','2020-04-17 21:46:02.098293'),(29,'knox','0003_auto_20150916_1526','2020-04-17 21:46:02.793590'),(30,'knox','0004_authtoken_expires','2020-04-17 21:46:02.948494'),(31,'knox','0005_authtoken_token_key','2020-04-17 21:46:03.055429'),(32,'knox','0006_auto_20160818_0932','2020-04-17 21:46:04.008406'),(33,'knox','0007_auto_20190111_0542','2020-04-17 21:46:04.115336'),(34,'leads','0001_initial','2020-04-17 21:46:04.323211'),(35,'tag','0001_initial','2020-04-17 21:46:04.479112'),(36,'playlist','0001_initial','2020-04-17 21:46:04.906432'),(37,'track','0001_initial','2020-04-17 21:46:06.168242'),(38,'musicplayersetting','0002_musicplayersetting_track','2020-04-17 21:46:10.059185'),(39,'sessions','0001_initial','2020-04-17 21:46:10.206094'),(40,'user','0002_auto_20200417_1723','2020-04-17 22:23:11.434113');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('g4ude965gzgp5wvqdr30vpx7zdh5ky2h','OTUwYjI1ODI1YmEzY2Y3YzgxOWNlMzcwYWMyMjdkYjNmNmQ0MWZhODp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlZTg5YWVlYzAxYzM4OGQ4ZjkzNTg2MTI5MzQxN2U3YmFmYjhkMzg4In0=','2020-05-01 21:47:32.676879');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `draftsong_draftsong`
--

DROP TABLE IF EXISTS `draftsong_draftsong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `draftsong_draftsong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Image` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Name` varchar(80) DEFAULT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  `Album_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `draftsong_draftsong_Album_id_c5ed39f2_fk_album_album_id` (`Album_id`),
  CONSTRAINT `draftsong_draftsong_Album_id_c5ed39f2_fk_album_album_id` FOREIGN KEY (`Album_id`) REFERENCES `album_album` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `draftsong_draftsong`
--

LOCK TABLES `draftsong_draftsong` WRITE;
/*!40000 ALTER TABLE `draftsong_draftsong` DISABLE KEYS */;
/*!40000 ALTER TABLE `draftsong_draftsong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_event`
--

DROP TABLE IF EXISTS `event_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Location` varchar(255) NOT NULL,
  `Time_happening` time(6) NOT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_event`
--

LOCK TABLES `event_event` WRITE;
/*!40000 ALTER TABLE `event_event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knox_authtoken`
--

DROP TABLE IF EXISTS `knox_authtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knox_authtoken` (
  `digest` varchar(128) NOT NULL,
  `salt` varchar(16) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  `expiry` datetime(6) DEFAULT NULL,
  `token_key` varchar(8) NOT NULL,
  PRIMARY KEY (`digest`),
  UNIQUE KEY `salt` (`salt`),
  KEY `knox_authtoken_user_id_e5a5d899_fk_user_user_id` (`user_id`),
  KEY `knox_authtoken_token_key_8f4f7d47` (`token_key`),
  CONSTRAINT `knox_authtoken_user_id_e5a5d899_fk_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knox_authtoken`
--

LOCK TABLES `knox_authtoken` WRITE;
/*!40000 ALTER TABLE `knox_authtoken` DISABLE KEYS */;
INSERT INTO `knox_authtoken` VALUES ('be762a7486fd26f22068f7fa32accf337cfe4ddfcf9368cab8ae7597fa6380d6b7ce4045c3638a248305082016ac9d65869484ad6e1cc0323b34e198bab3fea9','3c9fee47b8c1b220','2020-04-17 21:58:22.401827',1,'2020-04-18 07:58:22.401827','23c9a855');
/*!40000 ALTER TABLE `knox_authtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leads_lead`
--

DROP TABLE IF EXISTS `leads_lead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leads_lead` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leads_lead`
--

LOCK TABLES `leads_lead` WRITE;
/*!40000 ALTER TABLE `leads_lead` DISABLE KEYS */;
/*!40000 ALTER TABLE `leads_lead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musicplayersetting_musicplayersetting`
--

DROP TABLE IF EXISTS `musicplayersetting_musicplayersetting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicplayersetting_musicplayersetting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Last_volume` smallint NOT NULL,
  `Button_size` smallint NOT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  `Track_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Track_id` (`Track_id`),
  CONSTRAINT `musicplayersetting_m_Track_id_84e4183a_fk_track_tra` FOREIGN KEY (`Track_id`) REFERENCES `track_track` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicplayersetting_musicplayersetting`
--

LOCK TABLES `musicplayersetting_musicplayersetting` WRITE;
/*!40000 ALTER TABLE `musicplayersetting_musicplayersetting` DISABLE KEYS */;
/*!40000 ALTER TABLE `musicplayersetting_musicplayersetting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_playlist`
--

DROP TABLE IF EXISTS `playlist_playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_playlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Playlist_image` varchar(255) DEFAULT NULL,
  `Name` varchar(80) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Play_count` int NOT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_playlist`
--

LOCK TABLES `playlist_playlist` WRITE;
/*!40000 ALTER TABLE `playlist_playlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist_playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_playlist_user`
--

DROP TABLE IF EXISTS `playlist_playlist_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_playlist_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playlist_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `playlist_playlist_User_playlist_id_user_id_7773b8fb_uniq` (`playlist_id`,`user_id`),
  KEY `playlist_playlist_User_user_id_bbd445f7_fk_user_user_id` (`user_id`),
  CONSTRAINT `playlist_playlist_Us_playlist_id_18bb4feb_fk_playlist_` FOREIGN KEY (`playlist_id`) REFERENCES `playlist_playlist` (`id`),
  CONSTRAINT `playlist_playlist_User_user_id_bbd445f7_fk_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_playlist_user`
--

LOCK TABLES `playlist_playlist_user` WRITE;
/*!40000 ALTER TABLE `playlist_playlist_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist_playlist_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recordlabel_recordlabel`
--

DROP TABLE IF EXISTS `recordlabel_recordlabel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recordlabel_recordlabel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `City` varchar(255) NOT NULL,
  `Video_playlist_Url` varchar(255) DEFAULT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recordlabel_recordlabel`
--

LOCK TABLES `recordlabel_recordlabel` WRITE;
/*!40000 ALTER TABLE `recordlabel_recordlabel` DISABLE KEYS */;
/*!40000 ALTER TABLE `recordlabel_recordlabel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_tag`
--

DROP TABLE IF EXISTS `tag_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Genre` varchar(80) DEFAULT NULL,
  `Mood` varchar(80) DEFAULT NULL,
  `Instruments` varchar(80) DEFAULT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_tag`
--

LOCK TABLES `tag_tag` WRITE;
/*!40000 ALTER TABLE `tag_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `track_track`
--

DROP TABLE IF EXISTS `track_track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `track_track` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(80) DEFAULT NULL,
  `URL` varchar(512) DEFAULT NULL,
  `Licensing_rights` varchar(80) DEFAULT NULL,
  `Notes` varchar(255) DEFAULT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  `Album_id` int DEFAULT NULL,
  `Artist_id` int DEFAULT NULL,
  `Tag_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Tag_id` (`Tag_id`),
  KEY `track_track_Album_id_cfa5bc9f_fk_album_album_id` (`Album_id`),
  KEY `track_track_Artist_id_977388e7_fk_user_user_id` (`Artist_id`),
  CONSTRAINT `track_track_Album_id_cfa5bc9f_fk_album_album_id` FOREIGN KEY (`Album_id`) REFERENCES `album_album` (`id`),
  CONSTRAINT `track_track_Artist_id_977388e7_fk_user_user_id` FOREIGN KEY (`Artist_id`) REFERENCES `user_user` (`id`),
  CONSTRAINT `track_track_Tag_id_5931af59_fk_tag_tag_id` FOREIGN KEY (`Tag_id`) REFERENCES `tag_tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `track_track`
--

LOCK TABLES `track_track` WRITE;
/*!40000 ALTER TABLE `track_track` DISABLE KEYS */;
/*!40000 ALTER TABLE `track_track` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `track_track_playlist`
--

DROP TABLE IF EXISTS `track_track_playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `track_track_playlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `track_id` int NOT NULL,
  `playlist_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `track_track_Playlist_track_id_playlist_id_e0a871e0_uniq` (`track_id`,`playlist_id`),
  KEY `track_track_Playlist_playlist_id_b3fecd14_fk_playlist_` (`playlist_id`),
  CONSTRAINT `track_track_Playlist_playlist_id_b3fecd14_fk_playlist_` FOREIGN KEY (`playlist_id`) REFERENCES `playlist_playlist` (`id`),
  CONSTRAINT `track_track_Playlist_track_id_2275ac2a_fk_track_track_id` FOREIGN KEY (`track_id`) REFERENCES `track_track` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `track_track_playlist`
--

LOCK TABLES `track_track_playlist` WRITE;
/*!40000 ALTER TABLE `track_track_playlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `track_track_playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_user`
--

DROP TABLE IF EXISTS `user_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Bio` varchar(255) DEFAULT NULL,
  `Artist_trigger` int NOT NULL,
  `Followers` int NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `last_login` datetime(6) NOT NULL,
  `username` varchar(80) NOT NULL,
  `Time_stamp` datetime(6) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `Music_player_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `Music_player_id` (`Music_player_id`),
  CONSTRAINT `user_user_Music_player_id_9cc90a2f_fk_musicplay` FOREIGN KEY (`Music_player_id`) REFERENCES `musicplayersetting_musicplayersetting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_user`
--

LOCK TABLES `user_user` WRITE;
/*!40000 ALTER TABLE `user_user` DISABLE KEYS */;
INSERT INTO `user_user` VALUES (1,'pbkdf2_sha256$180000$b5rEATfdPs0M$t4iEWMP/hSZPy+UnJhxB+vHac6CMVcNSphhO39z1Ugk=','handofgod@gmail.com',NULL,0,0,NULL,'2020-04-17 21:47:32.669881','handofgod','2020-04-17 21:47:05.285346',1,1,NULL),(4,'123456','apogiimusic@gmail.com','N.Randall',0,49,NULL,'2020-04-17 22:23:17.738744','apogii','2020-04-17 22:23:17.738744',0,0,NULL),(5,'123456','bbs@bgnat.com','Brown Bag',1,200,NULL,'2020-04-17 22:24:00.557875','Brown Bag Special','2020-04-17 22:24:00.557875',0,0,NULL),(6,'123456','sikorasaur@sik.com','Getting better with grind',0,13,NULL,'2020-04-17 22:24:33.196954','sikorasaur','2020-04-17 22:24:33.196954',0,0,NULL),(7,'123456','arianagrande@gmail.com','So lit',1,9000000,NULL,'2020-04-17 22:26:04.837217','Ariana Grande','2020-04-17 22:26:04.837217',0,0,NULL),(8,'123456','cidetraq@gmail.com',NULL,0,27,NULL,'2020-04-17 22:26:44.131042','cidetraq','2020-04-17 22:26:35.312451',1,0,NULL);
/*!40000 ALTER TABLE `user_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_user_groups`
--

DROP TABLE IF EXISTS `user_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_user_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_user_groups_user_id_group_id_bb60391f_uniq` (`user_id`,`group_id`),
  KEY `user_user_groups_group_id_c57f13c0_fk_auth_group_id` (`group_id`),
  CONSTRAINT `user_user_groups_group_id_c57f13c0_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `user_user_groups_user_id_13f9a20d_fk_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_user_groups`
--

LOCK TABLES `user_user_groups` WRITE;
/*!40000 ALTER TABLE `user_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_user_user_permissions`
--

DROP TABLE IF EXISTS `user_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_user_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_user_user_permissions_user_id_permission_id_64f4d5b8_uniq` (`user_id`,`permission_id`),
  KEY `user_user_user_permi_permission_id_ce49d4de_fk_auth_perm` (`permission_id`),
  CONSTRAINT `user_user_user_permi_permission_id_ce49d4de_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `user_user_user_permissions_user_id_31782f58_fk_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_user_user_permissions`
--

LOCK TABLES `user_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `user_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-17 17:33:59
