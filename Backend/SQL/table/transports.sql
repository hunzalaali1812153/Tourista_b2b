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
-- Table structure for table `transports`
--

CREATE TABLE `transports` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `company` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `location` text NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `isDeleted` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transports`
--

INSERT INTO `transports` (`id`, `type`, `company`, `model`, `price`, `status`, `image`, `location`, `createdBy`, `isDeleted`) VALUES
(1, 'Sedan', 'Toyota', 'Corolla', '5000', 'Active', 'https://cars.usnews.com/static/images/Auto/izmo/i123736962/2020_toyota_corolla_hybrid_angularfront.jpg', 'Karachi', 'Admin', 1),
(2, 'Sedan', 'Honda', '2012', '3000', 'Active', 'https://cars.usnews.com/static/images/Auto/izmo/i123736962/2020_toyota_corolla_hybrid_angularfront.jpg', 'Karachi', 'Admin', 0),
(3, 'Sedan', 'Toyota', 'Corolla', '6000', 'Active', 'https://cars.usnews.com/static/images/Auto/izmo/i123736962/2020_toyota_corolla_hybrid_angularfront.jpg', 'Lahore', 'ali123', 0),
(4, 'Sedan', 'Toyota', 'Corolla 2014', '7500', 'Active', 'https://cars.usnews.com/static/images/Auto/izmo/i123736962/2020_toyota_corolla_hybrid_angularfront.jpg', 'Lahore', 'ahmed', 0),
(5, 'SUV', 'Toyota', 'Land Cruiser 2018', '15000', 'Active', 'https://static.pakwheels.com/2017/07/land-cruiser.jpg', 'Islamabad', 'admin', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transports`
--
ALTER TABLE `transports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transports`
--
ALTER TABLE `transports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
