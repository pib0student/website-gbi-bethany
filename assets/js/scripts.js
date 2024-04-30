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
