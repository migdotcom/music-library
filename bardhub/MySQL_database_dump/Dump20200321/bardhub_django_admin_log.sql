-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bardhub
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

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
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2020-03-21 06:57:48.981541','1','No More Champagne',1,'[{\"added\": {}}]',9,1),(2,'2020-03-21 06:58:05.346807','1','No More Champagne',2,'[{\"changed\": {\"fields\": [\"User\"]}}]',9,1),(3,'2020-03-21 06:58:56.768710','2','Vietnam Champion',1,'[{\"added\": {}}]',9,1),(4,'2020-03-21 07:00:32.328515','1','Love and Soccer',1,'[{\"added\": {}}]',12,1),(5,'2020-03-21 07:01:43.619429','2','My love will go on another person',1,'[{\"added\": {}}]',12,1),(6,'2020-03-21 07:24:04.250372','1','Artist object (1)',1,'[{\"added\": {}}]',13,1),(7,'2020-03-21 07:26:19.725680','1','Event object (1)',1,'[{\"added\": {}}]',14,1),(8,'2020-03-21 07:27:54.018026','1','RecordLabel object (1)',1,'[{\"added\": {}}]',15,1),(9,'2020-03-21 07:28:13.165754','1','Artist object (1)',2,'[{\"changed\": {\"fields\": [\"Event\", \"RecordLabel\"]}}]',13,1),(10,'2020-03-21 08:29:28.883778','2','secret information',3,'',13,1),(11,'2020-03-21 08:32:18.645749','2','_2_@gmail.com --- ManyFacesGod_2',2,'[{\"changed\": {\"fields\": [\"Followers\"]}}]',8,1),(12,'2020-03-22 01:18:44.758167','1','Spacy',1,'[{\"added\": {}}]',11,1),(13,'2020-03-22 01:20:56.915917','3','jb@spy.net --- jbond007',2,'[{\"changed\": {\"fields\": [\"Followers\"]}}]',8,1),(14,'2020-03-22 01:30:38.374530','3','jb@spy.net --- jbond007',2,'[{\"changed\": {\"fields\": [\"Followers\"]}}]',8,1),(15,'2020-03-22 01:33:14.989487','3','jb@spy.net --- jbond007',2,'[{\"changed\": {\"fields\": [\"Followers\"]}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-21 20:35:23
