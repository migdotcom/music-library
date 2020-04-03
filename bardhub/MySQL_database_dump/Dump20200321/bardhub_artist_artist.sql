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
-- Table structure for table `artist_artist`
--

DROP TABLE IF EXISTS `artist_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Time_stamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `RecordLabel_id` int DEFAULT NULL,
  `User_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_id` (`User_id`),
  KEY `artist_artist_RecordLabel_id_7faa27fd_fk_recordLab` (`RecordLabel_id`),
  CONSTRAINT `artist_artist_RecordLabel_id_7faa27fd_fk_recordLab` FOREIGN KEY (`RecordLabel_id`) REFERENCES `recordlabel_recordlabel` (`id`),
  CONSTRAINT `artist_artist_User_id_b101fd22_fk_user_user_id` FOREIGN KEY (`User_id`) REFERENCES `user_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_artist`
--

LOCK TABLES `artist_artist` WRITE;
/*!40000 ALTER TABLE `artist_artist` DISABLE KEYS */;
INSERT INTO `artist_artist` VALUES (1,'2020-03-21 07:24:04',1,1),(3,'2020-03-21 02:32:18',NULL,2),(4,'2020-03-21 20:30:38',NULL,NULL),(5,'2020-03-21 20:33:14',NULL,3);
/*!40000 ALTER TABLE `artist_artist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-21 20:36:12
