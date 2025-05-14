// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Update active class
    document.querySelectorAll('.navbar a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Optional: Mobile navbar toggle if you plan to add a hamburger menu
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
