-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 27, 2020 at 09:20 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `car_models`
--

DROP TABLE IF EXISTS `car_models`;
CREATE TABLE IF NOT EXISTS `car_models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `images` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `about` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `car_models`
--

INSERT INTO `car_models` (`id`, `images`, `name`, `about`) VALUES
(1, 'mini_1.png', '2021 MINI Cooper 3', 'Colour is a matter of individual taste, but with a wide spectrum of tones to choose from, there’s something for everyone. Whether you go bold and bright with Solaris Orange or keep it subtle and sleek with Moonwalk Grey, you’re sure to make a striking statement of your personal style.'),
(2, 'mini_2.png', 'Cooper S', 'The reimagined MINI Union Jack LED taillights, available as an option, do more than just catch your eye; they emit a brighter, clearer light that is more energy-efficient than ever. Surrounded by a striking chrome frame or high-gloss Piano Black for a sporty twist, they’re the perfect finishing touch to the MINI 5 door’s tail end.'),
(3, 'mini_3.png', 'John Cooper Works', 'Unlike most other convertibles, the MINI Convertible’s electrically-powered Soft Top operates in 3 stages: Fully down for complete open-air enjoyment, fully up for a more private motoring experience, or halfway in-between to let the breeze in. Best of all, it can be quietly folded up or down in 18 seconds flat – even at speeds of up to 30 km/h.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
