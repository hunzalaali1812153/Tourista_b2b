-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 10:08 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Address` varchar(30) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `channelId` int(11) NOT NULL,
  `Status` varchar(30) NOT NULL,
  `CenterId` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `createdby` varchar(30) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT current_timestamp(),
  `updateby` varchar(30) DEFAULT NULL,
  `updateon` datetime NOT NULL DEFAULT current_timestamp(),
  `userType` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `Password`, `Address`, `Phone`, `RoleId`, `Name`, `channelId`, `Status`, `CenterId`, `Email`, `createdby`, `createdon`, `updateby`, `updateon`, `userType`) VALUES
(1, 'admin', '41e5653fc7aeb894026d6bb7b2db7f65902b454945fa8fd65a', 'A-4,Madras Society ,Scheme 33', '3122428254', 1, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11', ''),
(2, 'ashar', '12345', '', '', 1, '', 0, '', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11', ''),
(3, 'asharali', '12345', 'A-4,Madras Society ,Scheme 33', '3122428254', 1, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11', ''),
(4, 'demo', '12345', 'A-4,Madras Society ,Scheme 33', '3122428254', 2, 'Ashar Ali', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11', ''),
(5, 'democo', '4e32624bca7accd146f119c15dbd8bcf2040fc4a54dba98328', 'A-4,Madras Society ,Scheme 33', '3122428254', 2, 'democo', 6, '1', 1, '', NULL, '2021-02-14 01:31:19', NULL, '2021-02-14 01:33:11', ''),
(6, 'hunzala12345', 'a984d0dae7c7a67b410ba5fa301955f74c806a5902a1823217', '1 strt.', '1234566', 1, 'Hunzala new', 6, '1', 1, 'hunzalaali8@gmail.com', NULL, '2022-05-19 12:07:21', NULL, '2022-05-19 12:07:21', '1'),
(7, 'ali123', 'e64eb2b4f728d551d4356cdd2c5b8c40818dd936ad66577612', 'gggghh', '123456', 1, 'Ali', 6, '1', 1, 'hunzalaali8@gmail.com', NULL, '2022-05-26 12:31:32', NULL, '2022-05-26 12:31:32', '1'),
(8, 'ali123', 'e64eb2b4f728d551d4356cdd2c5b8c40818dd936ad66577612', 'gggghh', '123456', 1, 'Ali', 6, '1', 1, 'hunzalaali8@gmail.com', NULL, '2022-05-26 12:31:36', NULL, '2022-05-26 12:31:36', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
