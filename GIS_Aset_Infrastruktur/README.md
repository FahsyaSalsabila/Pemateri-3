# GeoAset — Sistem Informasi Geografis Aset Infrastruktur

Studi kasus sederhana untuk topik **Career and Competition in Industrial Era with GIS**. Aplikasi ini menggambarkan bagaimana GIS membantu organisasi memetakan lokasi aset, melihat kondisi aset, serta mendukung penentuan prioritas pemeliharaan.

## Latar belakang studi kasus

Pengelolaan jalan, jembatan, dan fasilitas umum memerlukan data lokasi yang mudah dicari dan diperbarui. Jika data hanya disimpan sebagai daftar teks atau spreadsheet, petugas akan lebih sulit memahami persebaran aset. GeoAset menampilkan aset pada peta dan menyediakan filter agar pengguna dapat menemukan aset berdasarkan nama, kategori, serta kondisi.

Data di dalam proyek ini adalah **data simulasi untuk pembelajaran**, bukan data resmi pemerintah.

## Fitur

- Menampilkan aset pada peta interaktif.
- Membedakan kondisi **Baik** dan **Perlu Perbaikan** dengan warna penanda.
- Mencari aset berdasarkan nama atau kategori.
- Memfilter data berdasarkan kategori dan kondisi.
- Menambahkan aset dengan koordinat latitude dan longitude.
- Menghapus aset dan melihat lokasi aset dari tabel.
- Menyimpan perubahan di browser menggunakan `localStorage`.
- Menampilkan ringkasan jumlah seluruh aset, aset baik, dan aset yang perlu perbaikan.

## Teknologi

- HTML: struktur halaman.
- CSS: tampilan antarmuka responsif.
- JavaScript: filter, formulir, tabel, dan pengolahan data.
- Leaflet: pustaka peta interaktif.
- OpenStreetMap: sumber tile peta.
- `localStorage`: penyimpanan lokal pada browser.

## Struktur folder

```text
GIS_Aset_Infrastruktur/
├── index.html
├── style.css
├── app.js
├── README.md
├── .gitignore
└── data/
    └── assets.json
```

## Cara menjalankan di Visual Studio Code

1. Ekstrak folder `GIS_Aset_Infrastruktur.zip`.
2. Buka Visual Studio Code.
3. Pilih **File → Open Folder...**, lalu pilih folder `GIS_Aset_Infrastruktur`.
4. Pastikan komputer terhubung ke internet karena Leaflet dan peta OpenStreetMap dimuat secara online.
5. Cara termudah: pasang ekstensi **Live Server** di VS Code.
6. Klik kanan `index.html` → **Open with Live Server**.
7. Halaman GeoAset akan terbuka di browser.

Jika peta belum muncul, periksa koneksi internet dan pastikan browser tidak memblokir permintaan ke `unpkg.com` atau `tile.openstreetmap.org`.

## Cara menguji aplikasi

1. Coba cari `Jalan` pada kolom pencarian.
2. Pilih kategori **Jembatan** atau kondisi **Perlu Perbaikan**.
3. Klik **Lihat** pada salah satu baris untuk memusatkan peta ke lokasi aset.
4. Tambahkan aset baru dan masukkan koordinat yang valid.
5. Muat ulang halaman; data baru seharusnya tetap ada di browser yang sama.
6. Klik **Pulihkan data contoh** jika ingin mengembalikan data awal.

Contoh koordinat sekitar Kota Bengkulu:
- Latitude: `-3.8004`
- Longitude: `102.2655`

## Alur kerja sistem

1. Pengguna membuka aplikasi.
2. JavaScript membaca data aset contoh atau data yang tersimpan di `localStorage`.
3. Leaflet menampilkan lokasi aset pada peta.
4. Pengguna mencari atau memfilter aset.
5. Pengguna dapat menambah atau menghapus data.
6. Perubahan disimpan pada browser dan ringkasan diperbarui.

## Implementasi konsep GIS

- **Data spasial:** latitude dan longitude.
- **Visualisasi:** penanda aset di peta.
- **Analisis sederhana:** filter kondisi aset untuk menemukan aset yang perlu perbaikan.
- **Pengambilan keputusan:** daftar aset yang memerlukan perbaikan dapat menjadi bahan awal penentuan prioritas.
- **Integrasi:** peta dari OpenStreetMap ditampilkan melalui Leaflet.

## Batasan dan pengembangan berikutnya

Proyek ini masih berupa prototipe frontend. Data hanya tersimpan pada browser masing-masing pengguna, belum ada akun, server, database bersama, atau pembaruan real-time. Koordinat aset juga dimasukkan secara manual. Pengembangan selanjutnya dapat menggunakan backend Python Flask/Node.js, database PostgreSQL + PostGIS, autentikasi pengguna, impor CSV, serta API untuk menghubungkan data dari sistem lain.

## Publikasi ke GitHub

### A. Melalui website GitHub
1. Masuk ke https://github.com dan login.
2. Klik tombol **New repository**.
3. Isi nama repository: `gis-aset-infrastruktur`.
4. Pilih **Public** jika ingin portofolio bisa dilihat orang lain.
5. Klik **Create repository**.
6. Pada halaman repository, pilih **Add file → Upload files**.
7. Unggah `index.html`, `style.css`, `app.js`, `README.md`, `.gitignore`, dan folder `data` beserta `assets.json`.
8. Klik **Commit changes**.

### B. Melalui terminal VS Code (opsional)
Buka terminal di folder proyek dan jalankan:

```bash
git init
git add .
git commit -m "Membuat proyek GIS GeoAset"
git branch -M main
git remote add origin https://github.com/USERNAME/gis-aset-infrastruktur.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub milikmu. Jika Git meminta autentikasi, ikuti petunjuk login GitHub yang ditampilkan.

### Mengaktifkan GitHub Pages
1. Buka repository di GitHub.
2. Pilih **Settings → Pages**.
3. Pada bagian build/deployment, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu proses publikasi selesai. GitHub akan menampilkan URL website pada halaman Pages.

## Deskripsi singkat untuk laporan

GeoAset merupakan prototipe Sistem Informasi Geografis untuk memetakan dan memantau aset infrastruktur. Aplikasi menggunakan Leaflet dan OpenStreetMap untuk menampilkan lokasi aset berdasarkan koordinat geografis. Pengguna dapat mencari, memfilter, menambah, dan menghapus data aset serta melihat ringkasan kondisinya. Studi kasus ini menunjukkan penerapan kemampuan pemrograman, pengolahan data, visualisasi, dan integrasi layanan peta yang relevan dengan peluang karir GIS di industri.
