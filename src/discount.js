import readline from 'readline';
import { cart, hitungTotal, reset, tampilkan } from './cart';
import { menuUtama } from '..';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

