import readline from 'readline';
import { DAFTAR_MAKANAN, handlePilihanMenu } from "../index.js";
import { tambah } from './cart.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export function pilihanMakanan() {
  console.clear();
  console.log(`
    ================================
    |          # MAKANAN #         |
    |------------------------------|
    |    masukkan angka dibawah    |
    |                              |
    | 1. Nasi Goreng | Rp.17.000   |
    | 2. Nasi Padang | Rp.12.000   |
    | 3. Pecel Lele  | Rp.20.000   |
    | 4. Bakso       | Rp.16.000   |
    | 5. Kembali                   |
    |                              |
    ================================
  `);
  
  rl.question("Pilih makanan (angka): ", function (jawaban) {

    const pilihan = jawaban * 1;

    if (pilihan <= 4) {
      const item = DAFTAR_MAKANAN[pilihan];
      tambah(item);
      pilihanMakanan();
      console.log("✔ " + item.name + " ditambahkan.");
    } else if (pilihan === 5) {
      handlePilihanMenu();
    } else {
      pilihanMakanan();
      console.log("Pilihan tidak valid.");
    }
  });
}
