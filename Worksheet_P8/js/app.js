const profil = {
  nama: "ILHAM AJI KUSUMA",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["Public Speaking", "Editing", "Menyusun Dokumen"],
};

const jumlahProyek = 2;

const kalimat = `Nama saya ${profil.nama}, dan saya punya ${profil.keahlian.length} keahlian.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "OPTIMA", tahun: 2026, selesai: true },
  { judul: "DentaCare", tahun: 2027, selesai: true },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const dentacare = daftarProyek.find((proyek) => proyek.judul === "DentaCare");
console.log(dentacare);

let pilihanAktif = "semua";

const salinan = profil;
salinan.nama = "cek";