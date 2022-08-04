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
-- Table structure for table `tourcollaborate`
--

CREATE TABLE `tourcollaborate` (
  `collaborationId` int(10) NOT NULL,
  `operatorId` varchar(255) NOT NULL,
  `tourId` int(10) NOT NULL,
  `collaborateStatus` varchar(10) NOT NULL DEFAULT '0',
  `collaborationPrice` int(100) NOT NULL,
  `collaborationQuantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tourcollaborate`
--

INSERT INTO `tourcollaborate` (`collaborationId`, `operatorId`, `tourId`, `collaborateStatus`, `collaborationPrice`, `collaborationQuantity`) VALUES
(4, 'admin', 7, '1', 25000, 2),
(5, 'ali123', 2, '2', 5555, 2),
(6, 'hunzala', 3, '0', 33333, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tourcollaborate`
--
ALTER TABLE `tourcollaborate`
  ADD PRIMARY KEY (`collaborationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tourcollaborate`
--
ALTER TABLE `tourcollaborate`
  MODIFY `collaborationId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
