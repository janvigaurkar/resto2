const navbar = document.getElementById("navbar");
const images = ["Assets/div2.jpg", "Assets/div3.jpg"];
const titles = ["Dine", "Enjoy"];
const subtitles = ["WITH US", "WITH US"];
const img = document.getElementById("Image");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

let j = 0;

setInterval(() => {
  img.src = images[j];
  title.textContent = titles[j];
  subtitle.textContent = subtitles[j];

  j++;

  if (j >= images.length) {
    j = 0;
  }
}, 5000);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const items = document.querySelectorAll(
  ".about-text, .about-image, .food-card, .reserv-content, .input-box, .book-btn, .blog-card, .footer-box",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

items.forEach((item) => {
  item.classList.add("animate");
  observer.observe(item);
});
