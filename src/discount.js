import readline from 'readline';
import { cart, reset, tampilkan } from './cart';
import { menuUtama } from '..';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function hitungTotalDiscount() {
  let total = 0;
  let i = 0;
  while (i < cart.length) {
    total = total + cart[i].price;
    i = i + 1;
  }

  const diskon = total * (10 / 100);

  return diskon;
}


export function discount() {
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
      console.log("Total pembayaran: Rp." + hitungTotalDiscount());
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

