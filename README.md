# GeoAset — Sistem Informasi Geografis untuk Pemetaan dan Pemantauan Aset Infrastruktur

## 1. Latar Belakang

Perkembangan teknologi di era industri membuka peluang pemanfaatan Geographic Information System (GIS) atau Sistem Informasi Geografis dalam berbagai bidang pekerjaan. GIS merupakan teknologi yang digunakan untuk mengumpulkan, mengolah, menganalisis, dan menampilkan data berdasarkan lokasi geografis.

Salah satu penerapan GIS adalah dalam pengelolaan aset infrastruktur, seperti jalan, jembatan, dan fasilitas umum. Pengelolaan aset yang masih dilakukan secara manual dapat menyulitkan petugas dalam mengetahui lokasi, kondisi, dan persebaran aset di suatu wilayah.

Berdasarkan permasalahan tersebut, dikembangkan **GeoAset**, yaitu prototipe aplikasi GIS berbasis web yang membantu pengguna melihat lokasi aset infrastruktur melalui peta interaktif. Aplikasi ini juga menyediakan fitur pencarian, penyaringan data, penambahan aset, serta pemantauan kondisi aset untuk mendukung pengambilan keputusan.

Studi kasus ini mengacu pada materi *Career and Competition in Industrial Era with GIS*, khususnya mengenai penerapan pemrograman, pengelolaan data, visualisasi informasi geografis, dan integrasi teknologi dalam dunia industri.

## 2. Rumusan Masalah

Permasalahan yang menjadi dasar pengembangan aplikasi GeoAset adalah:

1. Bagaimana menampilkan lokasi aset infrastruktur secara visual melalui peta digital?
2. Bagaimana memudahkan pengguna mencari dan mengelompokkan data aset berdasarkan kategori dan kondisi?
3. Bagaimana membantu pengguna mengetahui aset yang berada dalam kondisi baik maupun yang memerlukan perbaikan?
4. Bagaimana menerapkan kemampuan pemrograman dan pengelolaan data dalam sebuah proyek GIS sederhana?

## 3. Tujuan Pengembangan

Tujuan pengembangan aplikasi GeoAset adalah:

1. Membuat aplikasi GIS berbasis web untuk menampilkan lokasi aset infrastruktur.
2. Memudahkan pengguna dalam mencari, menambah, dan menghapus data aset.
3. Menampilkan informasi kondisi aset melalui penanda pada peta dan ringkasan data.
4. Menerapkan HTML, CSS, JavaScript, dan teknologi pemetaan digital dalam sebuah proyek.
5. Menghasilkan proyek yang dapat dikembangkan lebih lanjut dan dijadikan portofolio mahasiswa Informatika.

## 4. Deskripsi Studi Kasus

GeoAset merupakan aplikasi GIS berbasis web yang digunakan untuk memetakan dan memantau aset infrastruktur di wilayah Kota Bengkulu. Aset yang dicatat meliputi jalan, jembatan, dan fasilitas umum.

Setiap aset memiliki informasi berupa nama, kategori, kondisi, latitude, dan longitude. Informasi tersebut digunakan untuk menampilkan posisi aset pada peta digital.

Pengguna dapat mencari aset berdasarkan nama, menyaring data berdasarkan kategori dan kondisi, serta menambahkan aset baru dengan memasukkan koordinat geografis. Aplikasi juga menampilkan ringkasan jumlah aset yang berada dalam kondisi baik dan aset yang memerlukan perbaikan.

Data lokasi dalam proyek ini merupakan **data simulasi untuk keperluan pembelajaran**, bukan data resmi pemerintah atau hasil survei lapangan.

## 5. Fitur Aplikasi

### 5.1 Peta Interaktif

Menampilkan lokasi aset infrastruktur menggunakan peta digital. Setiap aset ditandai dengan lingkaran berwarna yang menunjukkan kondisinya.

### 5.2 Pencarian dan Filter Data

Pengguna dapat mencari aset berdasarkan nama atau kategori serta menyaring data berdasarkan kategori aset dan kondisi aset.

### 5.3 Penambahan Data Aset

Pengguna dapat menambahkan aset baru dengan mengisi nama aset, kategori, kondisi, latitude, dan longitude.

### 5.4 Penghapusan Data

Pengguna dapat menghapus data aset yang tidak lagi diperlukan melalui daftar aset.

### 5.5 Ringkasan Kondisi Aset

Aplikasi menampilkan jumlah seluruh aset, jumlah aset dalam kondisi baik, dan jumlah aset yang memerlukan perbaikan.

### 5.6 Penyimpanan Data Lokal

Perubahan data disimpan menggunakan `localStorage` pada browser. Dengan demikian, data tetap tersedia ketika halaman dimuat ulang pada browser yang sama.

## 6. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Membuat struktur halaman aplikasi |
| CSS | Mengatur tampilan dan tata letak aplikasi |
| JavaScript | Mengelola data, pencarian, filter, dan interaksi pengguna |
| Leaflet.js | Menampilkan peta interaktif dan penanda lokasi |
| OpenStreetMap | Menyediakan peta dasar |
| localStorage | Menyimpan perubahan data pada browser |
| GitHub | Menyimpan kode sumber dan mendokumentasikan proyek |

## 7. Implementasi Sistem

Implementasi aplikasi GeoAset dibagi menjadi beberapa bagian.

### 7.1 Pengelolaan Data Spasial

Data spasial direpresentasikan menggunakan koordinat latitude dan longitude. Setiap aset memiliki koordinat yang digunakan untuk menentukan posisinya pada peta.

Contoh struktur data aset:

```javascript
{
  id: 1,
  name: "Jalan Soeprapto",
  category: "Jalan",
  condition: "Baik",
  lat: -3.8004,
  lng: 102.2655
}
```

Data tersebut menunjukkan nama aset, kategori, kondisi, serta koordinat geografisnya.

### 7.2 Visualisasi Peta

Leaflet digunakan untuk menampilkan peta dan menempatkan penanda sesuai koordinat aset. Warna hijau menunjukkan aset dalam kondisi baik, sedangkan warna merah menunjukkan aset yang memerlukan perbaikan.

### 7.3 Pencarian dan Penyaringan Data

JavaScript digunakan untuk memeriksa kata kunci pencarian dan pilihan filter. Data yang sesuai akan ditampilkan pada tabel dan peta, sedangkan data yang tidak sesuai akan disembunyikan dari tampilan.

### 7.4 Penambahan dan Penghapusan Data

Pengguna dapat menambahkan aset melalui formulir. Sistem memeriksa nama dan rentang koordinat sebelum menyimpan data. Penghapusan dilakukan melalui tombol pada tabel dan memerlukan konfirmasi pengguna.

### 7.5 Penyimpanan Data

Aplikasi menggunakan `localStorage` agar perubahan data dapat bertahan setelah halaman dimuat ulang. Penyimpanan ini masih bersifat lokal dan belum mendukung sinkronisasi data antarperangkat.

## 8. Alur Kerja Sistem

Alur kerja aplikasi GeoAset adalah sebagai berikut:

1. Pengguna membuka aplikasi melalui browser.
2. Sistem memuat data aset contoh atau data yang tersimpan pada browser.
3. Sistem menampilkan lokasi aset pada peta dan informasi aset pada tabel.
4. Pengguna mencari atau menyaring data sesuai kebutuhan.
5. Pengguna dapat menambahkan atau menghapus data aset.
6. Sistem menyimpan perubahan dan memperbarui tampilan peta, tabel, serta ringkasan kondisi aset.

## 9. Manfaat dan Analisis Studi Kasus

Penggunaan GIS dalam pengelolaan aset infrastruktur memberikan beberapa manfaat, yaitu:

- **Visualisasi lokasi:** pengguna dapat melihat persebaran aset secara langsung pada peta.
- **Efisiensi pencarian:** informasi aset dapat ditemukan melalui fitur pencarian dan filter.
- **Pemantauan kondisi:** aset yang memerlukan perbaikan dapat dikenali melalui penanda berwarna dan ringkasan data.
- **Dukungan pengambilan keputusan:** informasi kondisi dan lokasi aset dapat menjadi bahan awal dalam menentukan prioritas pemeriksaan atau pemeliharaan.
- **Pengembangan keterampilan:** proyek ini melatih pemrograman, pengolahan data, visualisasi, serta integrasi pustaka dan layanan peta.

Dalam konteks karir, proyek ini dapat menjadi portofolio awal untuk mengenal bidang GIS Developer, Web Developer, dan pengolahan data spasial.

## 10. Keterbatasan Sistem

GeoAset masih berupa prototipe pembelajaran dan memiliki beberapa keterbatasan:

1. Data yang digunakan masih berupa data simulasi.
2. Penyimpanan data menggunakan `localStorage`, sehingga data tidak dibagikan secara otomatis kepada pengguna lain.
3. Koordinat aset dimasukkan secara manual.
4. Sistem belum memiliki autentikasi, basis data server, atau pembaruan data secara real-time.
5. Aplikasi memerlukan koneksi internet untuk memuat pustaka Leaflet dan peta OpenStreetMap.

## 11. Pengembangan Selanjutnya

Pengembangan lebih lanjut dapat dilakukan dengan menambahkan:

- Basis data PostgreSQL dengan ekstensi PostGIS untuk mengelola data spasial.
- Backend menggunakan Python Flask atau Node.js.
- API untuk menghubungkan aplikasi dengan sistem lain.
- Fitur impor dan ekspor data melalui CSV.
- Autentikasi pengguna dan pengaturan hak akses.
- Analisis spasial untuk menentukan prioritas pemeliharaan aset berdasarkan lokasi dan kondisi.

Pengembangan tersebut dapat membuat aplikasi lebih sesuai dengan kebutuhan pengelolaan aset dalam organisasi atau industri.

## 12. Kesimpulan

GeoAset merupakan prototipe Sistem Informasi Geografis berbasis web yang dirancang untuk membantu pemetaan dan pemantauan aset infrastruktur. Melalui penggunaan HTML, CSS, JavaScript, Leaflet, dan OpenStreetMap, aplikasi dapat menampilkan lokasi aset, melakukan pencarian dan penyaringan data, serta membantu pengguna mengenali aset yang memerlukan perbaikan.

Proyek ini menunjukkan bahwa kemampuan pemrograman dan pengelolaan data dapat diterapkan dalam pengembangan solusi GIS. Meskipun masih memiliki keterbatasan, GeoAset dapat menjadi dasar untuk pengembangan sistem yang lebih lengkap sekaligus menjadi portofolio awal mahasiswa Informatika dalam mempersiapkan diri menghadapi persaingan di dunia industri.


**Catatan:** Proyek ini dibuat untuk keperluan pembelajaran dan studi kasus mata kuliah atau kegiatan terkait Sistem Informasi Geografis (GIS). Data aset yang disertakan bersifat simulasi.
