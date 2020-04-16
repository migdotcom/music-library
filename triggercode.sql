DELIMITER //
CREATE TRIGGER artist_trig BEFORE UPDATE ON user_user FOR EACH ROW
IF NEW.Followers > 49 THEN
SET NEW.Artist_trigger = 1;
END IF;//
DELIMITER ;
DELIMITER //
CREATE TRIGGER artist_view_trig BEFORE UPDATE ON album_album FOR EACH ROW
IF NEW.Count > 49 THEN
SET NEW.Description = CONCAT(OLD.Description, "\nVery Nice Album");
END IF;//
DELIMITER ;