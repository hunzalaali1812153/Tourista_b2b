-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 10:06 AM
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
-- Table structure for table `customertourmap`
--

CREATE TABLE `customertourmap` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `customerPhone` varchar(25) NOT NULL,
  `tourid` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bookingStatus` varchar(255) NOT NULL DEFAULT '0',
  `quantity` varchar(25) NOT NULL,
  `paymentStatus` varchar(255) NOT NULL DEFAULT '0',
  `eventStatus` varchar(255) NOT NULL DEFAULT '0',
  `operatorId` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customertourmap`
--

INSERT INTO `customertourmap` (`id`, `name`, `customerPhone`, `tourid`, `email`, `bookingStatus`, `quantity`, `paymentStatus`, `eventStatus`, `operatorId`) VALUES
(1, 'Hunzala', '1235456', 1, 'hunzala@gmail.com', '1', '2', '', '', 0),
(2, 'Ali', '45598877', 2, '', '', '', '', '', 0),
(3, 'Test tour', '123', 0, 'hunzala@gmail.com', '', '5', '', '', 0),
(4, 'Test tour', '123', 0, 'hunzala@gmail.com', '', '5', '', '', 0),
(5, 'Test tour', '123', 1, 'hunzala@gmail.com', '1', '5', '0', '', 0),
(6, 'Test tour1', '123', 1, 'hunzala@gmail.com', '1', '5', '0', '0', 0),
(7, 'asdasd', 'aSDASD', 1, 'ASDASD', '1', 'sdSD', '0', '0', 0),
(8, 'Hunzala1', '123', 1, 'hunzala@gmail.com', '0', '5', '0', '0', 0),
(9, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '1', '5', '0', '0', 0),
(10, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(11, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(12, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(13, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(14, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(15, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(16, 'Syed Muhammad Ali Hussain Qadri', '03422345527', 1, 'alihussainqadri6@gmail.com', '0', '5', '0', '0', 0),
(17, 'riaz', '03422345527', 1, 'hunzala@gmail.com', '0', '3', '0', '0', 0),
(18, 'Hunzala', '123456', 7, 'hunzala@gmail.com', '1', '10', '0', '0', 0),
(19, 'Hunzala', '123456', 1, 'HUNZALA', '0', '1', '0', '0', 0),
(20, 'bilal', '6556659', 2, 'hunzala@gmail.com', '0', '5', '0', '0', 0),
(21, 'Rafay', '123262', 1, 'hunzala@gmail.com', '0', '5', '0', '0', 0),
(22, 'Hunzala', '123', 1, 'hunzala@gmail.com', '0', '5', '0', '0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customertourmap`
--
ALTER TABLE `customertourmap`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customertourmap`
--
ALTER TABLE `customertourmap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
