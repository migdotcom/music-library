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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2020-03-21 06:35:01.321443'),(2,'auth','0001_initial','2020-03-21 06:35:01.651724'),(3,'admin','0001_initial','2020-03-21 06:35:02.947260'),(4,'admin','0002_logentry_remove_auto_add','2020-03-21 06:35:03.129804'),(5,'admin','0003_logentry_add_action_flag_choices','2020-03-21 06:35:03.139746'),(6,'album','0001_initial','2020-03-21 06:35:03.214569'),(7,'track','0001_initial','2020-03-21 06:35:03.271416'),(8,'tag','0001_initial','2020-03-21 06:35:03.604504'),(9,'playlist','0001_initial','2020-03-21 06:35:03.820949'),(10,'user','0001_initial','2020-03-21 06:35:04.194924'),(11,'user','0002_auto_20200309_2040','2020-03-21 06:35:04.498149'),(12,'user','0003_auto_20200319_1529','2020-03-21 06:35:04.511078'),(13,'user','0004_auto_20200319_2108','2020-03-21 06:35:04.524079'),(14,'album','0002_album_user_id','2020-03-21 06:35:04.672685'),(15,'album','0003_auto_20200320_2141','2020-03-21 06:35:05.357846'),(16,'album','0004_auto_20200320_2356','2020-03-21 06:35:05.875284'),(17,'tag','0002_remove_tag_track_id','2020-03-21 06:35:06.344072'),(18,'track','0002_auto_20200320_2141','2020-03-21 06:35:07.117956'),(19,'playlist','0002_auto_20200320_2141','2020-03-21 06:35:07.918815'),(20,'user','0005_auto_20200320_2141','2020-03-21 06:35:08.664820'),(21,'recordLabel','0001_initial','2020-03-21 06:35:08.950057'),(22,'event','0001_initial','2020-03-21 06:35:08.987956'),(23,'artist','0001_initial','2020-03-21 06:35:09.090681'),(24,'artist','0002_remove_artist_user_id','2020-03-21 06:35:09.784825'),(25,'artist','0003_auto_20200320_2356','2020-03-21 06:35:10.386216'),(26,'contenttypes','0002_remove_content_type_name','2020-03-21 06:35:10.650548'),(27,'auth','0002_alter_permission_name_max_length','2020-03-21 06:35:10.775177'),(28,'auth','0003_alter_user_email_max_length','2020-03-21 06:35:10.817067'),(29,'auth','0004_alter_user_username_opts','2020-03-21 06:35:10.827038'),(30,'auth','0005_alter_user_last_login_null','2020-03-21 06:35:10.929799'),(31,'auth','0006_require_contenttypes_0002','2020-03-21 06:35:10.933753'),(32,'auth','0007_alter_validators_add_error_messages','2020-03-21 06:35:10.945720'),(33,'auth','0008_alter_user_username_max_length','2020-03-21 06:35:11.120257'),(34,'auth','0009_alter_user_last_name_max_length','2020-03-21 06:35:11.241929'),(35,'auth','0010_alter_group_name_max_length','2020-03-21 06:35:11.264868'),(36,'auth','0011_update_proxy_permissions','2020-03-21 06:35:11.279827'),(37,'user','0006_user_artist_id','2020-03-21 06:35:11.506224'),(38,'draftsong','0001_initial','2020-03-21 06:35:11.582050'),(39,'draftsong','0002_remove_draftsong_user','2020-03-21 06:35:11.933082'),(40,'event','0002_auto_20200320_2356','2020-03-21 06:35:12.004937'),(41,'leads','0001_initial','2020-03-21 06:35:12.052761'),(42,'leads','0002_auto_20200310_0119','2020-03-21 06:35:12.235273'),(43,'leads','0003_auto_20200319_2108','2020-03-21 06:35:12.263200'),(44,'leads','0004_auto_20200319_2112','2020-03-21 06:35:12.614262'),(45,'musicplayersetting','0001_initial','2020-03-21 06:35:12.697048'),(46,'user','0007_auto_20200320_2356','2020-03-21 06:35:13.092980'),(47,'playlist','0003_auto_20200320_2356','2020-03-21 06:35:13.176760'),(48,'track','0003_auto_20200320_2356','2020-03-21 06:35:14.132242'),(49,'musicplayersetting','0002_auto_20200321_0017','2020-03-21 06:35:14.919097'),(50,'musicplayersetting','0003_auto_20200321_0021','2020-03-21 06:35:15.028804'),(51,'recordLabel','0002_auto_20200320_2356','2020-03-21 06:35:15.091635'),(52,'sessions','0001_initial','2020-03-21 06:35:15.130531'),(53,'user','0008_remove_user_playlist_id','2020-03-21 06:35:15.180424'),(54,'user','0009_remove_user_artist','2020-03-21 07:22:46.210848'),(55,'artist','0004_artist_user','2020-03-21 07:22:46.315566'),(56,'musicplayersetting','0004_auto_20200321_0122','2020-03-21 07:22:46.431258');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-21 19:56:07
