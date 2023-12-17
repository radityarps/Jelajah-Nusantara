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
        desc: "Provinsi ini terletak di tengah Pulau Jawa, Indonesia. Ibu kotanya adalah Semarang. Jawa Tengah dikenal sebagai “jantung” budaya Jawa dan memiliki berbagai kelompok etnis",
      },
      {
        id: "ID-AC",
        title: "Aceh",
        desc: "Provinsi paling barat di Indonesia, terletak di ujung utara Pulau Sumatra. Ibu kotanya adalah Banda Aceh. Aceh adalah provinsi Indonesia satu-satunya yang secara resmi menerapkan hukum Syariah",
      },
      {
        id: "ID-BA",
        title: "Bali",
        desc: "Provinsi ini terkenal sebagai destinasi wisata utama Indonesia. Bali adalah provinsi dengan mayoritas penduduk beragama Hindu di Indonesia. Ibu kotanya adalah Denpasar",
      },
      {
        id: "ID-BB",
        title: "Bangka Belitung",
        desc: "Provinsi ini terdiri dari dua pulau utama, Bangka dan Belitung, serta pulau-pulau kecil lainnya. Provinsi ini terkenal dengan pantai-pantainya yang indah dan batu granit raksasa",
      },
      {
        id: "ID-BE",
        title: "Bengkulu",
        desc: "Bengkulu adalah provinsi di Indonesia yang terletak di pantai barat daya Sumatra. Ibu kotanya adalah Kota Bengkulu. Provinsi ini memiliki luas wilayah 19.919,33 km² dan populasi sekitar 2.060.092 jiwa pada pertengahan tahun 2022",
      },
      {
        id: "ID-BT",
        title: "Banten",
        desc: "Provinsi ini terletak di ujung barat Pulau Jawa, Indonesia. Ibu kotanya adalah Serang. Banten memiliki berbagai suku dan budaya, termasuk suku Baduy yang memilih hidup jauh dari modernisasi",
      },
      {
        id: "ID-GO",
        title: "Gorontalo",
        desc: "Provinsi ini terletak di Pulau Sulawesi, Indonesia. Ibu kotanya adalah Gorontalo. Provinsi ini dikenal dengan julukan “Serambi Madinah” dan memiliki berbagai etnis dan budaya",
      },
      {
        id: "ID-JA",
        title: "Jambi",
        desc: "Jambi adalah provinsi di Indonesia yang terletak di pantai timur tengah Sumatra dan mencakup pegunungan Barisan di barat. Ibu kota dan kota terbesarnya juga bernama Jambi. Provinsi ini memiliki luas daratan 49,026.58 km², dan luas laut 3,274.95 km² dengan populasi 3,548,228 (tahun 2020)",
      },
      {
        id: "ID-JB",
        title: "Jawa Barat",
        desc: "Jawa Barat adalah provinsi di Indonesia yang terletak di bagian barat Pulau Jawa, dengan ibu kota provinsinya di Bandung. Jawa Barat dikenal sebagai salah satu daerah perkembangan tertua di Indonesia.",
      },
      {
        id: "ID-JI",
        title: "Jawa Timur",
        desc: "Provinsi ini terletak di bagian timur Pulau Jawa, Indonesia. Ibu kotanya adalah Surabaya. Jawa Timur memiliki berbagai destinasi wisata seperti Museum Angkut",
      },
      {
        id: "ID-JK",
        title: "Jakarta",
        desc: "Jakarta adalah ibu kota Republik Indonesia dan merupakan metropolis terbesar di negara ini. Jakarta adalah rumah bagi lebih dari 10 juta orang dengan berbagai latar belakang etnis dari seluruh Indonesia",
      },
      {
        id: "ID-KB",
        title: "Kalimantan Barat",
        desc: "Kalimantan Barat adalah provinsi di Indonesia. Ini adalah salah satu dari lima provinsi Indonesia yang mencakup Kalimantan, bagian Indonesia dari pulau Borneo. Ibu kota dan kota terbesarnya adalah Pontianak",
      },
      {
        id: "ID-KI",
        title: "Kalimantan Timur",
        desc: "Kalimantan Timur adalah provinsi di Indonesia. Ini adalah salah satu dari lima provinsi Indonesia yang mencakup Kalimantan, bagian Indonesia dari pulau Borneo. Ibu kota dan kota terbesarnya adalah Samarinda",
      },
      {
        id: "ID-KR",
        title: "Kepulauan Riau",
        desc: "Kepulauan Riau adalah provinsi di Indonesia yang berbatasan langsung dengan Singapura dan Malaysia. Provinsi ini memiliki luas wilayah sebesar 8.201,72 km²",
      },
      {
        id: "ID-KS",
        title: "Kalimantan Selatan",
        desc: "Kalimantan Selatan adalah provinsi di Indonesia. Ini adalah provinsi terkecil di Kalimantan, bagian Indonesia dari Borneo. Ibu kota provinsi ini adalah Banjarbaru",
      },
      {
        id: "ID-KT",
        title: "Kalimantan Tengah",
        desc: " Kalimantan Tengah adalah provinsi di Indonesia. Ini adalah salah satu dari lima provinsi di Kalimantan, bagian Indonesia dari Borneo. Ibu kota provinsinya adalah Palangka Raya",
      },
      {
        id: "ID-KU",
        title: "Kalimantan Utara",
        desc: "Kalimantan Utara adalah provinsi di Indonesia, dengan ibu kota di Tanjung Selor",
      },
      {
        id: "ID-LA",
        title: "Lampung",
        desc: "Lampung adalah provinsi di Indonesia yang terletak di ujung selatan Pulau Sumatra. Ibu kotanya adalah Bandar Lampung. Provinsi ini memiliki luas wilayah 33,575.41 km² dan populasi sekitar 9,176,546 jiwa pada pertengahan 2022",
      },
      {
        id: "ID-MA",
        title: "Maluku",
        desc: "Maluku adalah provinsi di Indonesia yang mencakup bagian tengah dan selatan Kepulauan Maluku. Ibu kota dan kota terbesarnya adalah Ambon",
      },
      {
        id: "ID-MU",
        title: "Maluku Utara",
        desc: "Maluku Utara adalah provinsi di Indonesia yang terletak di bagian timur Kepulauan Maluku. Provinsi ini resmi terbentuk pada 4 Oktober 1999 dan memiliki populasi sekitar 1,316,973 jiwa pada tahun 2021",
      },
      {
        id: "ID-NB",
        title: "Nusa Tenggara Barat",
        desc: "NTB adalah provinsi di Indonesia yang mencakup bagian barat Kepulauan Nusa Tenggara. Ibu kotanya adalah Mataram. Provinsi ini mencakup dua pulau utama, yaitu Lombok dan Sumbawa",
      },
      {
        id: "ID-NT",
        title: "Nusa Tenggara Timur",
        desc: "NTT adalah provinsi di Indonesia yang mencakup bagian timur Kepulauan Nusa Tenggara. Beberapa pulau utama di provinsi ini antara lain Flores, Sumba, Timor, Alor, Lembata, Rote, Sabu, Adonara, Solor, Ende, Komodo dan Palue",
      },
      {
        id: "ID-PA",
        title: "Papua",
        desc: "Papua adalah provinsi di Indonesia yang mencakup sekitar tiga perempat bagian barat Pulau New Guinea dan sejumlah pulau lepas pantai. Provinsi ini berbatasan dengan Samudra Pasifik",
      },
      {
        id: "ID-PB",
        title: "Papua Barat",
        desc: "Papua Barat, sebelumnya dikenal sebagai Irian Jaya Barat, adalah provinsi di Indonesia. Provinsi ini mencakup sebagian besar dua semenanjung barat Pulau New Guinea, setengah bagian timur Semenanjung Kepala Burung (atau Semenanjung Doberai) dan seluruh Semenanjung Bomberai, serta sejumlah pulau lepas pantai",
      },
      {
        id: "ID-RI",
        title: "Riau",
        desc: "Riau adalah provinsi di Indonesia yang terletak di bagian tengah Pulau Sumatra. Ibu kotanya adalah Pekanbaru. Provinsi ini memiliki luas wilayah 87,024 km² dan populasi sekitar 5,538,367 jiwa pada tahun 2009",
      },
      {
        id: "ID-SA",
        title: "Sulawesi Utara",
        desc: "Sulawesi Utara adalah provinsi di Indonesia. Terletak di Semenanjung Minahasa di pulau Sulawesi, selatan Filipina dan tenggara Sabah, Malaysia",
      },
      {
        id: "ID-SB",
        title: "Sumatera Barat",
        desc: " Sumatera Barat adalah provinsi di Indonesia yang terletak di Pulau Sumatra dengan ibu kota Padang. Provinsi ini memiliki luas wilayah 42,012.89 km² dan populasi sekitar 5,640,629 jiwa pada tahun 2023",
      },
      {
        id: "ID-SG",
        title: "Sulawesi Tenggara",
        desc: "Sulawesi Tenggara adalah provinsi di Indonesia yang terletak di bagian tenggara pulau Sulawesi dengan ibu kota Kendari. Provinsi ini memiliki luas wilayah 38,140 km² dan populasi sekitar 2,726,590 orang pada pertengahan tahun 2023",
      },
      {
        id: "ID-SN",
        title: "Sulawesi Selatan",
        desc: "Sulawesi Selatan adalah provinsi di Indonesia yang terletak di bagian selatan Sulawesi. Ibu kotanya adalah Makassar. Provinsi ini memiliki luas wilayah 46,717.48 km² dan populasi sekitar 9,225,747 jiwa pada pertengahan tahun 2022",
      },
      {
        id: "ID-SR",
        title: "Sulawesi Barat",
        desc: "Sulawesi Barat adalah sebuah provinsi yang terletak di bagian barat pulau Sulawesi, Indonesia. Daerah ini pernah menjadi bagian dari provinsi Sulawesi Selatan hingga pemekaran provinsi pada 2004. Ibu kota provinsi Sulawesi Barat adalah Kabupaten Mamuju",
      },
      {
        id: "ID-SS",
        title: "Sumatera Selatan",
        desc: "Sumatera Selatan adalah sebuah provinsi di Indonesia yang terletak di bagian selatan Pulau Sumatra. Ibu kota dan kota terbesar di provinsi ini adalah Palembang",
      },
      {
        id: "ID-ST",
        title: "Sulawesi Tengah",
        desc: "Sulawesi Tengah adalah sebuah provinsi yang terletak di bagian tengah pulau Sulawesi, Indonesia. Provinsi ini terdiri atas 12 kabupaten dan 1 kota, 147 kecamatan, 170 kelurahan, dan 1.839 desa",
      },
      {
        id: "ID-SU",
        title: "Sumatera Utara",
        desc: "Sumatera Utara adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Sumatra. Provinsi ini beribu kota di Kota Medan, dengan luas wilayah 72.981,23 km²",
      },
      {
        id: "ID-YO",
        title: "Yogyakarta",
        desc: "Yogyakarta adalah ibu kota dan kota terbesar dari Daerah Istimewa Yogyakarta di Indonesia. Kota ini terletak di bagian selatan Pulau Jawa dan dekat dengan Gunung Merapi. Yogyakarta dikenal sebagai pusat pendidikan, budaya, dan sejarah Jawa",
      },
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
