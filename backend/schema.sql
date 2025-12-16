-- Database Schema for CarePet App
-- Replicated from Prisma Schema

DROP DATABASE IF EXISTS carepet;
CREATE DATABASE carepet;
USE carepet;

-- Table Admin
CREATE TABLE `admin` (
    `id_admin` VARCHAR(5) NOT NULL,
    `nama_admin` VARCHAR(30) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id_admin`),
    UNIQUE KEY `username_unique` (`username`)
);

-- Table Pengguna
CREATE TABLE `pengguna` (
    `id_pengguna` VARCHAR(6) NOT NULL,
    `nama_pengguna` VARCHAR(40) NOT NULL,
    `no_hp` VARCHAR(15) NOT NULL,
    `alamat` VARCHAR(80) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id_pengguna`),
    UNIQUE KEY `email_unique` (`email`)
);

-- Table Hewan
CREATE TABLE `hewan` (
    `id_hewan` VARCHAR(6) NOT NULL,
    `id_pengguna` VARCHAR(6) NOT NULL,
    `nama_hewan` VARCHAR(30) NOT NULL,
    `jenis` VARCHAR(20) NOT NULL,
    `usia` INT NOT NULL,
    `kebutuhan_khusus` VARCHAR(50),
    PRIMARY KEY (`id_hewan`),
    KEY `hewan_id_pengguna_fk` (`id_pengguna`),
    CONSTRAINT `hewan_id_pengguna_fk` FOREIGN KEY (`id_pengguna`) REFERENCES `pengguna` (`id_pengguna`) ON DELETE CASCADE
);

-- Table Layanan
CREATE TABLE `layanan` (
    `id_layanan` VARCHAR(5) NOT NULL,
    `nama_layanan` VARCHAR(30) NOT NULL,
    `harga` INT NOT NULL,
    `deskripsi` VARCHAR(150) NOT NULL,
    PRIMARY KEY (`id_layanan`)
);

-- Table Pemesanan
CREATE TABLE `pemesanan` (
    `id_pemesanan` VARCHAR(8) NOT NULL,
    `id_hewan` VARCHAR(6) NOT NULL,
    `id_layanan` VARCHAR(5) NOT NULL,
    `tgl_masuk` DATE NOT NULL,
    `tgl_keluar` DATE NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id_pemesanan`),
    KEY `pemesanan_id_hewan_fk` (`id_hewan`),
    KEY `pemesanan_id_layanan_fk` (`id_layanan`),
    CONSTRAINT `pemesanan_id_hewan_fk` FOREIGN KEY (`id_hewan`) REFERENCES `hewan` (`id_hewan`) ON DELETE CASCADE,
    CONSTRAINT `pemesanan_id_layanan_fk` FOREIGN KEY (`id_layanan`) REFERENCES `layanan` (`id_layanan`) ON DELETE CASCADE
);

-- Table Pembayaran
CREATE TABLE `pembayaran` (
    `id_pembayaran` VARCHAR(8) NOT NULL,
    `id_pemesanan` VARCHAR(8) NOT NULL,
    `tanggal_bayar` DATE NOT NULL,
    `jumlah_bayar` INT NOT NULL,
    `metode` VARCHAR(15) NOT NULL,
    PRIMARY KEY (`id_pembayaran`),
    KEY `pembayaran_id_pemesanan_fk` (`id_pemesanan`),
    CONSTRAINT `pembayaran_id_pemesanan_fk` FOREIGN KEY (`id_pemesanan`) REFERENCES `pemesanan` (`id_pemesanan`) ON DELETE CASCADE
);

-- Tables for Session Management (Simplified from NextAuth)
CREATE TABLE `sessions` (
    `session_id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(6) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    PRIMARY KEY (`session_id`),
    KEY `sessions_user_id_fk` (`user_id`),
    CONSTRAINT `sessions_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `pengguna` (`id_pengguna`) ON DELETE CASCADE
);

-- Seed Initial Data
INSERT INTO `layanan` VALUES 
('L001', 'Grooming Standard', 50000, 'Mandian, potong kuku, rapihkan bulu'),
('L002', 'Grooming Premium', 100000, 'Full salon, spa, massage'),
('L003', 'Penitipan Harian', 75000, 'Makan 2x, main sore'),
('L004', 'Penitipan VIP', 150000, 'Kamar AC, CCTV, Makan 3x');
