/**
 * @typedef {Object} ItemData
 * @property {string} title - Judul utama item.
 * @property {string[]} tags - Daftar kata kunci atau kategori pencarian.
 * @property {string} img - URL/deskripsi gambar terkait item.
 * @property {string} paragraph - Penjelasan atau deskripsi detail item.
 */
/**
 * @type {ItemData[]}
 */
let data = [
  {
    title: "buku",
    tags: ["baca", "perpustakaan"],
    img: "./Buku.jpg",
    paragraph: "buku dapat di baca di perpustakaan",
  },
  {
    title: "pulpen",
    tags: ["alat tulis", "sekolah", "kantor"],
    img: "./Pulpen.jpg",
    paragraph:
      "pulpen digunakan sebagai alat tulis di sekolah maupun di kantor",
  },
  {
    title: "ayam celup",
    tags: ["makanan", "kantin"],
    img: "./AyamCelup.jpg",
    paragraph: "ayam celup adalah salah satu makanan yang tersedia di kantin",
  },
  {
    title: "es teh anget",
    tags: ["ngawur", "minuman"],
    img: "Tesh.jpg",
    paragraph: "es teh anget adalah minuman yang ngawur",
  },
];
/**
 * @param {ItemData[]} keyword
 * @returns {ItemData[]}
 */
function cariData(keyword) {
  // Ubah keyword ke huruf kecil agar pencarian bersifat case-insensitive
  const query = keyword.toLowerCase().trim();

  return data.filter((item) => {
    // Cek apakah keyword ada di dalam title
    const matchTitle = item.title.toLowerCase().includes(query);

    // Cek apakah keyword ada di salah satu elemen array tags
    const matchTags = item.tags.some((tag) =>
      tag.toLowerCase().includes(query),
    );

    // Kembalikan item jika cocok di title ATAU tags
    return matchTitle || matchTags;
  });
}

/**
 * @param {ItemData[]} data
 *@returns {string}
 */
function createText(data) {
  let text = "";
  for (let ind of data) {
    text +=
      "<div class='infocard'><h3>" +
      ind.title +
      "</h3> <img src='"+ind.img
      +"'class='imgbase'> <p>" +
      ind.paragraph +
      "</p></div>";
  }
  return text;
}
function searching() {
  const ti = document.getElementById("ti");
  const ou = document.getElementById("out");
  let hasil;
  if (ti.value !== "") {
    hasil = cariData(ti.value);
  } else {
    hasil = data;
  }
  ou.innerHTML=createText(hasil);
}
document.addEventListener("DOMContentLoaded", function() {
  searching();
});
