const indonesiaMap = document.getElementById("indonesia-map");

// Pan Zoom Function
const panzoom = Panzoom(indonesiaMap, {
  maxScale: 5,
  minScale: 1,
  contain: "outside",
  cursor: "grab",
});
panzoom.pan(10, 10);
panzoom.zoom(1, { animate: true });
indonesiaMap.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);

// Interactive map
var paths = document.querySelectorAll("#indonesia-map path");

//Last Clicked Region
var lastClickedPath = document.getElementById("ID-JT");
lastClickedPath.style.fill = "var(--fourth-color)";

paths.forEach(function (path) {
  path.addEventListener("click", function (e) {
    var id = e.target.id;
    const regionName = document.getElementById("region-name");
    regionName.innerHTML = id;
    if (lastClickedPath) {
      lastClickedPath.style.fill = "var(--third-color)";
    }
    e.target.style.fill = "var(--fourth-color)";

    lastClickedPath = e.target;

    // Data tiap Daerah/Region
    const dataRegion = [
      {
        id: "ID-JT",
        title: "Jawa Tengah",
        desc: "Provinsi Jawa Tengah memiliki luas wilayah 32. 548 km2. Di sebelah barat, Jawa Tengah berbatasan dengan Provinsi Jawa Barat. Di sebelah timur berbatasan dengan Provinsi Jawa Timur. Di sebelah selatan berbatasan dengan Samudra Hindia dan Provinsi Daerah Istimewa Yogyakarta.",
      },
      { id: "ID-AC", title: "Aceh", desc: " " },
      {
        id: "ID-BA",
        title: "Bali",
        desc: "Bali adalah sebuah provinsi di Indonesia yang terletak di bagian barat Pulau Jawa. Ibu kotanya adalah Denpasar. Provinsi ini memiliki luas wilayah 5.641 km² dan jumlah penduduk 4.904.000 jiwa (per 2020). Bali merupakan salah satu destinasi wisata terpopuler di dunia, dengan keindahan alam, budaya, dan seni yang khasnya",
      },
      {
        id: "ID-BB",
        title: "Bangka Belitung",
        desc: "Bangka Belitung adalah sebuah provinsi di Indonesia yang terletak di bagian selatan Pulau Sumatera. Ibu kotanya adalah Bangka, sedangkan ibu kota provinsi lainnya adalah Belitung. Provinsi ini memiliki luas wilayah 3.185 km² dan jumlah penduduk 2.099.000 jiwa (per 2020). Bangka Belitung memiliki pantai-pantai indah, terumbu karang yang menawan, dan batu granit raksasa",
      },
      { id: "ID-BE", title: "Bengkulu", desc: " " },
      {
        id: "ID-BT",
        title: "Banten",
        desc: "Banten adalah sebuah provinsi di Indonesia yang terletak di bagian selatan Pulau Jawa. Ibu kotanya adalah Banten City, sedangkan ibu kota provinsi lainnya adalah Serang dan Tangerang Selatan. Provinsi ini memiliki luas wilayah 3.170 km² dan jumlah penduduk 4.600.000 jiwa (per 2020). Banten merupakan salah satu pusat perdagangan dan industri di Indonesia, dengan sejarah panjang sebagai kerajaan maritim",
      },
      {
        id: "ID-GO",
        title: "Gorontalo",
        desc: "Gorontalo adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Sulawesi. Ibu kotanya adalah Gorontalo City, sedangkan ibu kota provinsi lainnya adalah Kaimana dan Soppeng Selatan. Provinsi ini memiliki luas wilayah 16.489 km² dan jumlah penduduk 1 juta jiwa (per 2020). Gorontalo merupakan salah satu daerah pesisir utara Sulawesi yang memiliki pantai-pantai indah seperti Pantai Kepulauan Seribu, Pantai Kepulauan Rote Ndao, Pantai Kepulauan Rote Ata, dll",
      },
      { id: "ID-JA", title: "Jambi", desc: " " },
      { id: "ID-JB", title: "Jawa Barat", desc: " " },
      {
        id: "ID-JI",
        title: "Jawa Timur",
        desc: "Jawa Timur adalah sebuah provinsi di Indonesia yang terletak di bagian timur Pulau Jawa. Ibu kotanya adalah Surabaya. Provinsi ini memiliki luas wilayah 47.922km² dan jumlah penduduk 39.698.631 jiwa (per 2019). Jawa Timur memiliki wilayah terluas di antara 6 provinsi di Pulau Jawa, dan memiliki jumlah penduduk terbanyak kedua di Indonesia setelah Jawa Barat. Provinsi ini dikenal sebagai pusat industri dan keuangan di kawasan tengah Indonesia dan timur pulau Jawa, dengan tingkat pertumbuhan ekonomi yang cukup tinggi.",
      },
      { id: "ID-JK", title: "Jakarta", desc: " " },
      { id: "ID-KB", title: "Kalimantan Barat", desc: " " },
      { id: "ID-KI", title: "Kalimantan Timur", desc: " " },
      { id: "ID-KR", title: "Kepulauan Riau", desc: " " },
      { id: "ID-KS", title: "Kalimantan Selatan", desc: " " },
      { id: "ID-KT", title: "Kalimantan Tengah", desc: " " },
      { id: "ID-KU", title: "Kalimantan Utara", desc: " " },
      { id: "ID-LA", title: "Lampung", desc: " " },
      { id: "ID-MA", title: "Maluku", desc: " " },
      { id: "ID-MU", title: "Maluku Utara", desc: " " },
      { id: "ID-NB", title: "Nusa Tenggara Barat", desc: " " },
      { id: "ID-NT", title: "Nusa Tenggara Timur", desc: " " },
      { id: "ID-PA", title: "Papua", desc: " " },
      { id: "ID-PB", title: "Papua Barat", desc: " " },
      { id: "ID-RI", title: "Riau", desc: " " },
      { id: "ID-SA", title: "Sulawesi Utara", desc: " " },
      { id: "ID-SB", title: "Sumatera Barat", desc: " " },
      { id: "ID-SG", title: "Sulawesi Tenggara", desc: " " },
      { id: "ID-SN", title: "Sulawesi Selatan", desc: " " },
      { id: "ID-SR", title: "Sulawesi Barat", desc: " " },
      { id: "ID-SS", title: "Sumatera Selatan", desc: " " },
      { id: "ID-ST", title: "Sulawesi Tengah", desc: " " },
      { id: "ID-SU", title: "Sumatera Utara", desc: " " },
      { id: "ID-YO", title: "Yogyakarta", desc: " " },
    ];
    // Function pengubah h2 dan deskripsinya sesuai data
    for (let i = 0; i < dataRegion.length; i++) {
      if (dataRegion[i].id === id) {
        document.getElementById("region-name").textContent =
          dataRegion[i].title;
        document.getElementById("region-description").textContent =
          dataRegion[i].desc;
      }
    }
  });
});
