# Persiapan Project Kanban

- Jalankan command berikut ini untuk membuat proyek React + TypeScript yang baru:

```
npm create vite@latest kanban-project -- --template react-ts
cd kanban-project
npm install
```

- Pasang dan inisialisasi ESLint (ikuti pengaturan yang sama dengan materi di atas):

```
npm install --save-dev eslint
npm init @eslint/config

```

- Tambahkan "project": "./tsconfig.json" ke "parserOptions" dalam .eslintrc.json:

```
"parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json" // Ditambahkan
  },

```

- Pasang Prettier dan buatlah file konfigurasi:

```
npm install --save-dev --save-exact prettier

```
- Buat File

```
echo {}> .prettierrc.json
```

- Kali ini, kita akan menambahkan aturan ini ke Prettier (.prettierrc.json).

```
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true
}
```
- Pasang eslint-config-prettier sehingga ESLint dan Prettier tidak saling bentrok.

```
npm install --save-dev eslint-config-prettier
```

- Tambahkan baris di bawah ini ke .eslintrc.json:

```
"extends": [
    ...
    "prettier" // Ditambahkan
  ],
```

- Pertama, kita akan memperbarui code awal agar sesuai dengan aturan Prettier menggunakan command berikut:

```
npx prettier --write src
```

- Selanjutnya, jalankan command berikut ini untuk menjalankan ESLint:
```
npx eslint src
```

# Jika terdapat error dalam code awal pada App.tsx, kita bisa mengabaikannya sebab kita akan mengubah code-nya pada bagian selanjutnya.
Jika error ESLint ditemukan pada file awal di mana kita tidak melakukan perubahan apapun, biasanya di sana kita kecualikan peraturan ESLint.

- Buatlah file .eslintignore dan tambahkan baris seperti ini (file dan folder dapat berbeda-beda):

```
vite-env.d.ts
```

- Jika command di atas telah berjalan dengan baik, maka semuanya sudah siap. Jalankan server dengan command berikut dan periksa apakah layar awal tertampilkan atau tidak.
```
npm run dev
```


