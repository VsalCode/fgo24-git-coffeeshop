import readline from 'readline';
import { menuUtama } from '../index.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let cart = [];

export function tambah(item) {
  cart[cart.length] = item;
}

export function hitungTotal() {
  let total = 0;
  let i = 0;
  while (i < cart.length) {
    total = total + cart[i].price;
    i = i + 1;
  }
  return total;
}

export function tampilkan() {
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

export function reset() {
  cart = [];
}

export function lihatKeranjang() {
  console.clear();
  console.log(`
  === KERANJANG BELANJA ===
  `);


  if (cart.length === 0) {
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


export function checkout() {
  console.clear();

  if (cart.length === 0) {
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
