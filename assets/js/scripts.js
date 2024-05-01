// NavBar Active Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-item a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-item a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Menangkap card dengan ID "linkDetailWartaGereja"
let btnDetailWartaGereja = document.getElementById("linkDetailWartaGereja");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailWartaGereja.addEventListener("click", function () {
  // Ganti "pages/warta_gereja.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/warta_gereja.html";
});

// Menangkap card dengan ID "linkDetailPosPi"
let btnDetailPosPi = document.getElementById("linkDetailPosPi");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailPosPi.addEventListener("click", function () {
  // Ganti "pages/pos_pi.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/pos_pi.html";
});

// Menangkap card dengan ID "linkDetailDoaMlm"
let btnDetailDoaMlm = document.getElementById("linkDetailDoaMlm");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailDoaMlm.addEventListener("click", function () {
  // Ganti "pages/doa_malam.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/doa_malam.html";
});

// Menangkap card dengan ID "linkDetailWanitaGBI"
let btnDetailWanitaGBI = document.getElementById("linkDetailWanitaGBI");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailWanitaGBI.addEventListener("click", function () {
  // Ganti "pages/wanita_gbi.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/wanita_gbi.html";
});

// Menangkap card dengan ID "linkDetailWanitaGBI"
let btnDetailGenB = document.getElementById("linkDetailGenB");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailGenB.addEventListener("click", function () {
  // Ganti "pages/gen_b.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/gen_b.html";
});

// Menangkap card dengan ID "linkDetailBethanyKids"
let btnDetailBethanyKids = document.getElementById("linkDetailBethanyKids");
// Menambahkan event listener untuk mengarahkan pengguna ke halaman tujuan saat tombol ditekan
btnDetailBethanyKids.addEventListener("click", function () {
  // Ganti "pages/bethany_kids.html" dengan URL halaman yang ingin Anda arahkan
  window.location.href = "pages/bethany_kids.html";
});
