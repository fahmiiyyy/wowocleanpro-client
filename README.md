# WowoClean Pro Client

Frontend client untuk sistem manajemen kontainer limbah B3 WowoClean Pro yang dikembangkan sebagai pemenuhan tugas Ujian Akhir Praktikum Teknologi Integrasi Sistem.

## Informasi Mahasiswa

Nama : Fahmi Muhammad Fayid Dhinanta

NIM : 245150700111018

Program Studi : Teknologi Informasi

Angkatan : 2024

Kelas : TIS C

## Deskripsi Project

Project ini berfungsi sebagai client yang terhubung dengan backend WowoClean Pro API menggunakan Axios. Frontend digunakan untuk melakukan autentikasi pengguna, menampilkan informasi pengguna yang sedang login, serta mengakses data kontainer melalui API Gateway yang telah diamankan menggunakan JWT Authentication dan Role Authorization.

## Fitur Implementasi UAP

### Authentication

* Login menggunakan JWT
* Menampilkan informasi pengguna yang sedang login
* Logout pengguna
* Penyimpanan token JWT pada Local Storage

### API Integration

* Integrasi Axios dengan Laravel API
* Seluruh request menggunakan endpoint API V1
* Seluruh request data kontainer menggunakan API Gateway
* Pengiriman Bearer Token pada header Authorization

### Container Management

* Menampilkan daftar kontainer
* Menambahkan kontainer baru
* Menampilkan role pengguna
* Menyesuaikan tampilan berdasarkan role pengguna

## Struktur Project

```text
wowocleanpro-client
│
├── index.html
├── app.js
└── style.css
```

## Backend Repository

Repository backend yang digunakan pada project ini:

https://github.com/fahmiiyyy/wowocleanpro-api

## Cara Menjalankan Project

### 1. Jalankan Backend API

Pastikan backend WowoClean Pro API telah berjalan pada:

```text
http://127.0.0.1:8000
```

### 2. Periksa Konfigurasi Axios

Pada file `app.js`:

```javascript
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1"
});
```

Sesuaikan alamat tersebut apabila backend dijalankan pada host atau port yang berbeda.

### 3. Jalankan Frontend

Buka file:

```text
index.html
```

menggunakan browser atau Live Server.

## Endpoint yang Digunakan

```text
POST /api/v1/login
GET /api/v1/profile
POST /api/v1/logout

GET /api/v1/gateway/containers
POST /api/v1/gateway/containers
```

## Hasil Implementasi UAP

* Form login berhasil memperoleh token JWT
* Token berhasil disimpan pada Local Storage
* Axios berhasil mengirim Bearer Token pada setiap request terproteksi
* Frontend berhasil terhubung dengan API Gateway V1
* Data kontainer berhasil ditampilkan dari backend

## Author

Fahmi Muhammad Fayid Dhinanta

245150700111018

Teknologi Informasi 2024

TIS C
