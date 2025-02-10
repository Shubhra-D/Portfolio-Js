const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

//Frontend animations
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typed-text");
  const text = "Frontend Developer.."; // Text to type and erase
  let index = 0;
  let isDeleting = false;

  function typeText() {
      if (!isDeleting) {
          textElement.textContent = text.substring(0, index);
          index++;

          if (index > text.length) {
              isDeleting = true;
              setTimeout(typeText, 1500); // Wait before deleting
              return;
          }
      } else {
          textElement.textContent = text.substring(0, index);
          index--;

          if (index < 0) {
              isDeleting = false;
          }
      }

      setTimeout(typeText, isDeleting ? 100 : 150); // Typing speed (150ms), deleting speed (100ms)
  }

  // Start animation
  textElement.textContent = "";
  setTimeout(typeText, 500);
});
