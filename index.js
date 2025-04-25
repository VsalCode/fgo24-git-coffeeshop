const readline = require('readline');

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

function tambah(item) {
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

function buatMenuItem(nama, harga) {
  const item = {};
  item.name = nama;
  item.price = harga;
  return item;
}

const DAFTAR_MAKANAN = {
  1: buatMenuItem("Nasi Goreng", 17000),
  2: buatMenuItem("Nasi Padang", 12000),
  3: buatMenuItem("Pecel Lele", 20000),
  4: buatMenuItem("Bakso", 16000),
};

const DAFTAR_MINUMAN = {
  1: buatMenuItem("Es Teh Manis", 5000),
  2: buatMenuItem("Jus Jeruk", 8000),
  3: buatMenuItem("Es Kelapa", 10000),
  4: buatMenuItem("Kopi Susu", 7000),
};

/*-----------------------------------------------------------------------------------
MENU MAKANAN
-----------------------------------------------------------------------------------*/

function pilihanMakanan() {
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

/*-----------------------------------------------------------------------------------
MENU MINUMAN
-----------------------------------------------------------------------------------*/

function pilihanMinuman() {
  console.clear();
  console.log(`
    ================================
    |          # MINUMAN #         |
    |------------------------------|
    |    masukkan angka dibawah    |
    |                              |
    | 1. Es Teh Manis| Rp.5.000    |
    | 2. Jus Jeruk   | Rp.8.000    |
    | 3. Es Kelapa   | Rp.10.000   |
    | 4. Kopi Susu   | Rp.7.000    |
    | 5. Kembali                   |
    |                              |
    ================================
  `);

  rl.question("Pilih minuman (angka): ", function (jawaban) {

    const pilihan = jawaban * 1;

    if (pilihan <= 4) {
      const item = DAFTAR_MINUMAN[pilihan * 1];
      tambah(item);
      pilihanMinuman();
      console.log("✔ " + item.name + " ditambahkan.");
    } else if (pilihan === 5) {
      handlePilihanMenu();
    } else {
      console.log("Pilihan tidak valid.");
      pilihanMinuman();
    }
  });
}

/*-----------------------------------------------------------------------------------
MENU UTAMA
-----------------------------------------------------------------------------------*/

function handlePilihanMenu() {
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
