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
// Resume Modal Show/Hide
const showBtn = document.getElementById('showResumeBtn');
const modal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

if (showBtn && modal && closeModal) {
  showBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

