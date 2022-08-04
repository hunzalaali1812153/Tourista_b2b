-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2022 at 11:57 AM
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
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `createdBy` varchar(200) NOT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `hotelName` varchar(200) NOT NULL,
  `hotelLocation` varchar(200) NOT NULL,
  `roomPrice` varchar(200) NOT NULL,
  `hotelFacilities` varchar(200) NOT NULL,
  `hotelDescription` varchar(200) NOT NULL,
  `hotelStatus` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `isDeleted` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `createdBy`, `createdOn`, `hotelName`, `hotelLocation`, `roomPrice`, `hotelFacilities`, `hotelDescription`, `hotelStatus`, `image`, `isDeleted`) VALUES
(1, 'admin', '2022-02-27 19:18:38', 'pine park', '123 street', '3000', 'sab kch milegaa', 'behtreen hotel hai', 'Active', 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg', 0),
(2, 'admin', '2022-05-22 16:57:49', 'Paradise Beach Hut', 'Karachi', '8000', 'Food & Drink', 'New hotel', 'Active', 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg', 0),
(3, 'samad', '2022-06-16 14:21:20', 'Paradise Beach Hut', 'Karachi', '5000', 'Food & Drink', 'Test', 'Active', 'https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
