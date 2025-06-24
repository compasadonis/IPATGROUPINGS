-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 06:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `groupings_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `username`, `password`, `role`) VALUES
(1, 'COMPAS', '$2b$10$kWimDQruuy9YPLFn50ZkYOUUrAiSKGXjQvNmLNp74AOmoG3OgMcQu', 'Student1'),
(2, 'EBONA', '$2b$10$n.3zWQimjwCz1Y41NSBdHuPjmDaMm5S0jC/OKq5KtO8k3Q2V92NUS', 'Student2'),
(3, 'LAGUARDIA', '$2b$10$2RVAeRhOGrJGcGWF7iMV4emHLvQPvqyT5n6nKywtQ8n0zKBu5AMuC', 'Student3'),
(4, '1', '$2b$10$cFMf1vh2nRU52JGjYmTJw.nW3Dt6aPdacOci7/5bn31OyxIGTp8Gy', 'Admin'),
(5, '2', '$2b$10$aj82nUD4KMd.uFnJy6q6bOLkhBiNdZv6g5BmlblWFENm6Qn7KQSgi', 'Staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
