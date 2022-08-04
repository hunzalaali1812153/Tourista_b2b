-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 10:07 AM
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
-- Table structure for table `customertransportmap`
--

CREATE TABLE `customertransportmap` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `transportId` int(10) NOT NULL,
  `bookingStatus` varchar(255) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customertransportmap`
--

INSERT INTO `customertransportmap` (`id`, `name`, `phone`, `email`, `transportId`, `bookingStatus`) VALUES
(1, 'Hunzala', '123', 'hunzala@gmail.com', 1, '1'),
(2, 'Hunzala', '123', 'hunzala@gmail.com', 1, '0'),
(3, 'Hunzala', '123', 'hunzala@gmail.com', 2, '0'),
(4, 'Test tour', '123', 'hunzala@gmail.com', 1, '0'),
(8, 'Test tour', '123', 'hunzala@gmail.com', 1, '0'),
(9, 'Ali', '123', 'alihussainqadri6@gmail.com', 1, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customertransportmap`
--
ALTER TABLE `customertransportmap`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customertransportmap`
--
ALTER TABLE `customertransportmap`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
