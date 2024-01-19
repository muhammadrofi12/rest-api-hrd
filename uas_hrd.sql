-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 04:43 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uas_hrd`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `status` enum('active','inactive','terminated') NOT NULL,
  `hired_on` date DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`, `timestamp`) VALUES
(1, 'Rofi', 'L', '085155339024', 'Jl.Raya Bogor', 'rofi1@gmail.com', 'active', '2024-01-19', '2024-01-19 02:02:47'),
(2, 'Arham', 'L', '085155339055', 'Jl.Asikin Aja', 'arham1@gmail.com', 'active', '2024-01-19', '2024-01-19 02:03:18'),
(4, 'Kamil', 'L', '02726252', 'Jl.sukasuka', 'kamil1@gmail.com', 'inactive', '2024-01-19', '2024-01-18 17:00:00'),
(5, 'Jamal', 'L', '02726252', 'Jl.sukasuka', 'kamil1@gmail.com', 'terminated', '2024-01-19', '2024-01-18 17:00:00'),
(6, 'Susanti', 'P', '02726252', 'Jl.sukasuka', 'kamil1@gmail.com', 'terminated', '2024-01-19', '2024-01-18 17:00:00'),
(7, 'Ahmad Jojo', 'P', '02726252', 'Jl.sukasuka', 'kamil1@gmail.com', 'active', '2024-01-19', '2024-01-18 17:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
