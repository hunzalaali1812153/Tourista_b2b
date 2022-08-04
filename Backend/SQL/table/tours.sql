-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2022 at 11:56 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourista b2b`
--

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `days` int(11) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `departure` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `createdBy` varchar(200) NOT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `isDeleted` int(10) NOT NULL DEFAULT 0,
  `quantity` int(10) NOT NULL,
  `shortDescription` varchar(255) NOT NULL,
  `longDescription` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `name`, `days`, `destination`, `departure`, `price`, `status`, `image`, `createdBy`, `createdOn`, `isDeleted`, `quantity`, `shortDescription`, `longDescription`) VALUES
(1, 'GILGIT TOUR', 10, 'GILGIT', 'KARACHI', 50000, 'ACTIVE', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/bc/57/hunza-serena-inn.jpg?w=900&h=-1&s=1', 'admin', '0000-00-00 00:00:00', 0, 11, 'Hunza is a mountainous valley in the Gilgit–Baltistan region of Pakistan. The Hunza is situated north/west of the Hunza River, at an elevation of around 2,500 meters (8,200 ft). The territory of Hunza is about 7,900 square kilometers (3,100 sq mi). Aliaba', 'A miracle of stillness, epitome of perfect shades of blue, a beauty in tragedy, Attabad lake is Pakistan\'s largest artificial lake created by a severe landslide in Attabad Village, Gojal valley back in 2010. Bluest of all, this lake connects the glorious Hunza valley to the Serene Passu in Gojal valley. The sangfroid 45 minutes boat ride in the lake to the nirvana on the other end is an unforgettable experience. As the boat meanders through the turquoise colors lake lapped by high rugged colossal mountains the journey seems to arrest in your heart forever where every scene tends to have multiple makeovers having an instant display of splendor. During the summer the warm climate soothes the soul and the glistening sunshine shines onto the sparkling still water where the only ripples created are because of the boat. Emotions intensified when you come across one of the wonders of the majestic Passu Cathedrals that rise dramatically behind the fluttering clouds. In winters you can even wal'),
(2, 'HUNZA TOUR', 7, 'HUNZA', 'KARACHI', 40000, 'ACTIVE', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/bc/57/hunza-serena-inn.jpg?w=900&h=-1&s=1', 'admin', '0000-00-00 00:00:00', 0, 30, 'Hunza is a mountainous valley in the Gilgit–Baltistan region of Pakistan. The Hunza is situated north/west of the Hunza River, at an elevation of around 2,500 meters (8,200 ft). The territory of Hunza is about 7,900 square kilometers (3,100 sq mi). Aliaba', 'A miracle of stillness, epitome of perfect shades of blue, a beauty in tragedy, Attabad lake is Pakistan\'s largest artificial lake created by a severe landslide in Attabad Village, Gojal valley back in 2010. Bluest of all, this lake connects the glorious Hunza valley to the Serene Passu in Gojal valley. The sangfroid 45 minutes boat ride in the lake to the nirvana on the other end is an unforgettable experience. As the boat meanders through the turquoise colors lake lapped by high rugged colossal mountains the journey seems to arrest in your heart forever where every scene tends to have multiple makeovers having an instant display of splendor. During the summer the warm climate soothes the soul and the glistening sunshine shines onto the sparkling still water where the only ripples created are because of the boat. Emotions intensified when you come across one of the wonders of the majestic Passu Cathedrals that rise dramatically behind the fluttering clouds. In winters you can even wal'),
(3, 'Test tour', 7, 'Skardu', 'Karachi', 10000, 'Active', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/bc/57/hunza-serena-inn.jpg?w=900&h=-1&s=1', 'admin', '2022-05-18 14:50:20', 0, 0, 'hello\r\n\r\nthis is a test', ''),
(4, 'Test tour', 5, 'Skardu', 'Lahore', 40000, 'Active', 'https://www.ajktours.com/wp-content/uploads/2020/01/Luxus-Hunza-Resort-Featured.jpg', 'ali123', '2022-05-18 14:53:06', 0, 0, 'Test', 'admin'),
(5, 'Test tour', 5000, 'Skardu', 'Isb', 2000, 'Active', 'https://www.ajktours.com/wp-content/uploads/2020/01/Luxus-Hunza-Resort-Featured.jpg', 'admin', '2022-05-18 14:54:22', 1, 0, 'Test', 'Test'),
(6, 'New tour', 12, 'gilgit', 'karachi', 5000, 'active', 'https://www.ajktours.com/wp-content/uploads/2020/01/Luxus-Hunza-Resort-Featured.jpg', 'admin', '2022-05-19 10:44:45', 0, 10, 'test', 'test'),
(7, 'New test tour', 12, 'Hunza', 'Karachi', 25000, 'Active', 'https://www.ajktours.com/wp-content/uploads/2020/01/Luxus-Hunza-Resort-Featured.jpg', 'ali123', '2022-05-26 12:32:49', 0, 60, 'Test', 'abcd'),
(12, 'TOUR 1', 5, 'KHU', 'LHR', 5500, 'ACTIVE', 'https://www.ajktours.com/wp-content/uploads/2020/01/Luxus-Hunza-Resort-Featured.jpg', 'admin', '2022-06-11 12:58:35', 0, 5, 'HHHH', 'KKKK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
