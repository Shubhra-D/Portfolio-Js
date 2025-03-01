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

const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//resume popup 
document.addEventListener("DOMContentLoaded", function () {
  const resumeLink = document.getElementById("resume-link");
  const resumePopup = document.getElementById("resume-popup");
  const downloadBtn = document.getElementById("download");
  const viewBtn = document.getElementById("view");

  // Show popup when clicking Resume link
  resumeLink.addEventListener("click", function (event) {
      event.preventDefault();
      resumePopup.style.display = "block";
      resumePopup.style.left = event.pageX + "px";
      resumePopup.style.top = event.pageY + "px";
  });

  // Download Resume
  downloadBtn.addEventListener("click", function () {
      const resumeUrl = "https://drive.google.com/uc?export=download&id=1BYtPdDb4pKiVbdkeHhlcd50guR5MsE65"; 
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = "My_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      resumePopup.style.display = "none"; // Hide popup
  });

  // View Resume in a New Tab
  viewBtn.addEventListener("click", function () {
      const resumeUrl = "https://drive.google.com/file/d/1BYtPdDb4pKiVbdkeHhlcd50guR5MsE65/view?usp=sharing"; 
      window.open(resumeUrl, "_blank");
      resumePopup.style.display = "none"; // Hide popup
  });

  // Hide popup when clicking outside
  document.addEventListener("click", function (event) {
      if (!resumePopup.contains(event.target) && event.target !== resumeLink) {
          resumePopup.style.display = "none";
      }
  });
});