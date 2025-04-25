import { DAFTAR_MINUMAN, handlePilihanMenu, tambah } from "..";

export function pilihanMinuman() {
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
