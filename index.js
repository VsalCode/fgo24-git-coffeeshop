import readline from 'readline';
import { pilihanMakanan } from './src/makanan';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*-----------------------------------------------------------------------------------
MENU UTAMA
-----------------------------------------------------------------------------------*/

function menuUtama() {
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

let cart = [];

export function tambah(item) {
  cart[cart.length] = item;
}

function hitung(){
  cart.length;
}

function hitungTotal() {
  let total = 0;
  let i = 0;
  while (i < cart.length) {
    total = total + cart[i].price;
    i = i + 1;
  }
  return total;
}

function tampilkan() {
  if (cart.length === 0) {
    console.log("Keranjang kosong.");
    return;
  }

  let i = 0;
  while (i < cart.length) {
    console.log((i + 1) + ". " + cart[i].name + " - Rp." + cart[i].price);
    i = i + 1;
  }

  console.log("\nTotal: Rp." + hitungTotal());
}

function reset() {
  cart = [];
}

function lihatKeranjang() {
  console.clear();
  console.log(`
  === KERANJANG BELANJA ===
  `);


  if (hitung() === 0) {
    console.log("Keranjang kamu masih kosong. \n");
  } else {
    tampilkan();
  }

  rl.question(`ketik 0 untuk kembali ke menu utama: `, function (back) {
    if (back === "0" ){
      menuUtama();
    }    
  });
}


function checkout() {
  console.clear();

  if (hitung() === 0) {
    console.log("Belum ada item untuk checkout.");
    rl.question("\nKetik 0 untuk kembali ke menu utama: ", function (back) {
      if(back === "0"){
        console.clear();
        menuUtama();
      }
    });
    return;
  }

  console.log(`
  === CHECKOUT ===
  Daftar pembelian:
  ================
  `);
  console.log("");
  tampilkan();

  rl.question("\nKonfirmasi pembayaran (y/n): ", function (answer) {
    if (answer === "y" || answer === "Y") {
      console.log("\n✅ Pembayaran berhasil!");
      console.log("Total pembayaran: Rp." + hitungTotal());
      console.log("Terima kasih atas pembelian Anda!");
      reset();
    } else {
      console.log("\nPembayaran dibatalkan.");
    }

    rl.question("\nTekan Enter untuk kembali ke menu utama...", function () {
      console.clear();
      menuUtama();
    });
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
