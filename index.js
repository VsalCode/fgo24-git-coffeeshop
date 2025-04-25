import readline from 'readline';
import { pilihanMakanan } from './src/makanan.js';
import { pilihanMinuman } from './src/minuman.js';
import { checkout, lihatKeranjang } from './src/cart.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*-----------------------------------------------------------------------------------
MENU UTAMA
-----------------------------------------------------------------------------------*/

export function menuUtama() {
  console.log(`
    ============================
    |    # SELAMAT DATANG #    |
    |--------------------------|
    |  1. Pilih Menu           |
    |  2. Lihat Keranjang      |
    |  3. Checkout             |
    |  0. Keluar               |
    ============================
  `);
  rl.question("ketik angka untuk pilihan: ", function (jawaban) {
    if (jawaban === "1") {
      handlePilihanMenu();
    } else if (jawaban === "2") {
      lihatKeranjang();
    } else if (jawaban === "3") {
      checkout();
    } else if (jawaban === "0") {
      console.log("Terima kasih telah menggunakan program ini!");
      rl.close();
    } else {
      console.log("Input tidak valid.");
    }
  });
}


/*-----------------------------------------------------------------------------------
KERANJANG
-----------------------------------------------------------------------------------*/

export function buatMenuItem(nama, harga) {
  const item = {};
  item.name = nama;
  item.price = harga;
  return item;
}

export const DAFTAR_MAKANAN = {
  1: buatMenuItem("Nasi Goreng", 17000),
  2: buatMenuItem("Nasi Padang", 12000),
  3: buatMenuItem("Pecel Lele", 20000),
  4: buatMenuItem("Bakso", 16000),
};

export const DAFTAR_MINUMAN = {
  1: buatMenuItem("Es Teh Manis", 5000),
  2: buatMenuItem("Jus Jeruk", 8000),
  3: buatMenuItem("Es Kelapa", 10000),
  4: buatMenuItem("Kopi Susu", 7000),
};

/*-----------------------------------------------------------------------------------
MENU UTAMA
-----------------------------------------------------------------------------------*/

export function handlePilihanMenu() {
  console.clear();
  console.log(`
    ============================
    |         # MENU #         |
    |--------------------------|
    |  1. Makanan              |
    |  2. Minuman              |
    |  3. Kembali              |
    ============================
  `);
  
  rl.question("ketik angka untuk pilihan: ", function (jawaban) {
    if (jawaban === "1") {
      pilihanMakanan();
    } else if (jawaban === "2") {
      pilihanMinuman();
    } else if (jawaban === "3") {
      menuUtama();
    } else {
      console.log("Input tidak valid.");
      handlePilihanMenu();
    }
  });
}


menuUtama();
