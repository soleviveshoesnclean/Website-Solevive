# Solevive Shoes & Clean Landing Page

Landing page statis untuk **Solevive Shoes & Clean**. Project ini sudah siap di-upload ke GitHub dan di-deploy ke Vercel.

## Struktur Project

```text
.
├── index.html
├── package.json
├── vercel.json
├── public/
└── README.md
```

## Cara Upload ke GitHub

1. Buat repository baru di GitHub.
2. Upload semua file project ini ke repository tersebut.
3. Commit ke branch utama, misalnya `main`.

Atau melalui terminal:

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

## Cara Deploy ke Vercel

### Opsi 1: Deploy dari Dashboard Vercel

1. Login ke Vercel.
2. Klik **Add New Project**.
3. Import repository GitHub yang berisi project ini.
4. Framework Preset: pilih **Other** atau biarkan Vercel mendeteksi sebagai static site.
5. Build Command: kosongkan.
6. Output Directory: kosongkan atau isi `.`.
7. Klik **Deploy**.

### Opsi 2: Deploy dari Terminal

```bash
npm install
npx vercel
npx vercel --prod
```

## Catatan Penting

- File utama website adalah `index.html`.
- Link WhatsApp masih memakai `https://wa.me/`. Ganti dengan nomor WhatsApp bisnis, contoh: `https://wa.me/6281234567890`.
- Jika ingin custom domain, tambahkan domain melalui dashboard Vercel setelah deploy.
