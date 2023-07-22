// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Fungsi untuk menutup menu hamburger
function closeHamburgerMenu() {
  hamburger.classList.remove('hamburger-active');
  navMenu.classList.add('hidden');
}

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
  const target = event.target;

  // Periksa apakah yang diklik adalah elemen selain tombol hamburger dan menu navigasi
  if (!target.closest('#hamburger') && !target.closest('#nav-menu')) {
    closeHamburgerMenu();
  }
});


// up start
const upButton = document.getElementById("upButton");

upButton.addEventListener("click", function (event) {
  event.preventDefault();
  const scrollToTop = () => {
    if (window.scrollY != 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(scrollToTop, 1000); // Waktu penundaan antara scroll
    }
  };
  
  scrollToTop();
});
// up end

// pindah ke halaman lain
// coffee
let barista = document.getElementById("barisata");
barista.addEventListener("click", function () {
  // Kode untuk mengarahkan pengguna ke halaman lain
});
barista.addEventListener("click", function () {
  window.open(
    "http://127.0.0.1:5500/dist/baca-selengkapnya/barista/index.html"
  );
});

// html & css
let htmlCss = document.getElementById("htmlcss");
htmlCss.addEventListener("click", function () {
  // Kode untuk mengarahkan pengguna ke halaman lain
});
htmlCss.addEventListener("click", function () {
  window.open(
    "http://127.0.0.1:5500/dist/baca-selengkapnya/html-css/index.html"
  );
});


// Dark Mode toggle
  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');

  darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  });

