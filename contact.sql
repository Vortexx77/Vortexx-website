-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 05:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vortexx`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `message` text NOT NULL,
  `service` text NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `subject`, `message`, `service`, `sent_at`) VALUES
(1, 'Crisen Asiima', 'asiimac3@gmail.com', '0779901499', 'School', 'How is it going', 'systems-development', '2025-05-16 21:40:52'),
(2, 'Ian Victor', 'ianvictor@gmail.com', '0752345633', 'company', 'I was inquiring how much is digital marketing', 'digital-marketing', '2025-05-16 21:45:07'),
(3, 'Melyssa Blevins', 'loceqy@mailinator.com', '+1 (233) 465-7765', 'Dolores ad', 'Ut ea proident temp', 'infrastructure', '2025-05-16 21:51:47'),
(4, 'Ronalo', 'ronaldo@gmail.com', '3495678943', 'Website', 'I want a sport website', 'web-design', '2025-05-17 11:16:02'),
(5, 'Nash Nixon', 'cygusyby@mailinator.com', '+1 (784) 313-2306', 'Esse est n', 'Sint ipsum exceptur', 'web-design', '2025-05-21 09:43:42'),
(6, 'Camden Daniels', 'gahipogeta@mailinator.com', '+1 (293) 579-6105', 'Consectetu', 'Magnam nobis velit ', 'web-design', '2025-05-26 13:29:00'),
(7, 'Wilma Shepherd', 'rowojoryl@mailinator.com', '+1 (229) 618-8386', 'Ex alias e', 'Commodi libero liber', 'systems-development', '2025-06-23 15:44:58'),
(8, 'Jolie Carver', 'sulu@mailinator.com', '+1 (779) 394-1606', 'Qui verita', 'Sequi et a et sed', 'systems-development', '2025-06-24 15:46:45'),
(9, 'Damian Sykes', 'sukufa@mailinator.com', '+1 (762) 147-7409', 'Qui cum om', 'Iste occaecat modi q', 'graphics-design', '2025-06-24 15:53:44'),
(10, 'Maite Castaneda', 'lafygyqa@mailinator.com', '+1 (193) 928-1293', 'Aute optio', 'Aliquam rerum magnam', 'graphics-design', '2025-06-24 15:56:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
