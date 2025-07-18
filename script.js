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

document.getElementById("resume-link").addEventListener("click", function (event) {
  event.preventDefault();

  const resumeId = "1ry5Ty8Ifp5jwmTyrGGOfanaL4wOHCplA"; 
  const viewUrl = `https://drive.google.com/file/d/${resumeId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;

  window.open(viewUrl, "_blank");

  setTimeout(() => {
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "Shubhra_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show toast
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    // Hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }, 1000);//download resume after 1sec
});
