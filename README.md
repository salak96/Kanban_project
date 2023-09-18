# Persiapan Project Kanban

-   Jalankan command berikut ini untuk membuat proyek React + TypeScript yang baru:

```bash
npm create vite@latest kanban-project -- --template react-ts
```
- install node.Js

```bash
cd kanban-project
npm install
```

-   Pasang dan inisialisasi ESLint (ikuti pengaturan yang sama dengan materi di atas):

```bash
npm install --save-dev eslint
```
- install npm eslint
```bash
npm init @eslint/config

```

-   Tambahkan "project": "./tsconfig.json" ke "parserOptions" dalam .eslintrc.json:

```bash
"parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json" // Ditambahkan
  },

```

-   Pasang Prettier dan buatlah file konfigurasi:

```bash
npm install --save-dev --save-exact prettier

```

-   Buat File

```bash
touch .prettierrc.json
```

-   Kali ini, kita akan menambahkan aturan ini ke Prettier (.prettierrc.json).

```bash
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true
}
```

-   Pasang eslint-config-prettier sehingga ESLint dan Prettier tidak saling bentrok.

```bash
npm install --save-dev eslint-config-prettier
```

-   Tambahkan baris di bawah ini ke .eslintrc.json:

```bash
"extends": [
    ...
    "prettier" // Ditambahkan
  ],
```

-   Pertama, kita akan memperbarui code awal agar sesuai dengan aturan Prettier menggunakan command berikut:

```bash
npx prettier --write src
```

-   Selanjutnya, jalankan command berikut ini untuk menjalankan ESLint:

```bash
npx eslint src
```

# Jika terdapat error dalam code awal pada App.tsx, kita bisa mengabaikannya sebab kita akan mengubah code-nya pada bagian selanjutnya.

Jika error ESLint ditemukan pada file awal di mana kita tidak melakukan perubahan apapun, biasanya di sana kita kecualikan peraturan ESLint.

-   Buatlah file .eslintignore dan tambahkan baris seperti ini (file dan folder dapat berbeda-beda):

```bash
vite-env.d.ts
```

-   Jika command di atas telah berjalan dengan baik, maka semuanya sudah siap. Jalankan server dengan command berikut dan periksa apakah layar awal tertampilkan atau tidak.

```bash
npm run dev
```

# Tambahkan code dibawah ini di package.json

```bash
"format":"npx prettier --write src",
 "linter":"npx eslint src",
```

-   Untuk Menjalankan code diatas diterminal

```bash
npm run format
npm run linter
```

# Setelah siap melanjutkan proses development, mari kita pasang react-router dengan command berikut ini :

```bash
npm install react-router-dom
```

# Setelah terpasang, perbarui App.tsx dan atur BrowserRouter seperti ini:

```bash

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: 'task-list',
    element: <h1>Task List</h1>,
  },
  {
    path: 'task-progress',
    element: <h1>Task Progress</h1>,
  },
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
```

# buatlah /src/types/index.ts dan definisikan type disitu. Karena constant styles memiliki format { key(string): value(CSS) }, maka bisa didefinisikan seperti berikut ini.

```
export interface CSSProperties {
  [key: string]: React.CSSProperties
}

```
