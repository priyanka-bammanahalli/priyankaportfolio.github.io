//let x = document.getElementsByClassName("main")[0];

// document.querySelector(".cross").style.display = "none";
// document.querySelector(".hamburger").addEventListener("click", () => {
//   document.querySelector(".sidebar").classList.toggle("sidebarGo");

//   if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
//     document.querySelector(".ham").style.display = "inline";
//     document.querySelector(".cross").style.display = "none";
//     //x.classList.remove("test");
//   } else {
//     document.querySelector(".ham").style.display = "none";
//     //x.classList.add("test");
//     setTimeout(() => {
//       document.querySelector(".cross").style.display = "inline";
//     }, 350);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const aboutLink = document.querySelector('a[href="#aboutMe"]');
//   const aboutContent = document.querySelector("#aboutMe .aboutMe-fade");

//   aboutLink.addEventListener("click", function () {
//     aboutContent.classList.remove("visible");
//     void aboutContent.offsetWidth; // reflow
//     setTimeout(() => {
//       aboutContent.classList.add("visible");
//     }, 1000);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    "#aboutMe, #home, #skill, #My-project, #My-certificate, #contact"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Optional: Smooth scroll with link click
  const navLinks = document.querySelectorAll(
    'a[href="#aboutMe"], a[href="#home"], a[href="#skill"], a[href="#My-project"], a[href="#My-certificate"], a[href="#contact"]'
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

let currentIndex = 0;

function scrollCertificates(direction) {
  const container = document.getElementById("certificateContainer");
  const cards = container.querySelectorAll(".certificate-card");

  const cardWidth = cards[0].offsetWidth + 20; // card width + margin-right
  const maxIndex = cards.length - 1;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  container.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

// Adjust scroll position when window resizes
window.addEventListener("resize", () => {
  const container = document.getElementById("certificateContainer");
  const cards = container.querySelectorAll(".certificate-card");
  const cardWidth = cards[0].offsetWidth + 20;
  container.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
});

const hamburger = document.querySelector(".ham");
const cross = document.querySelector(".cross");
const sidebar = document.querySelector(".sidebar");

// When hamburger menu is clicked, show the sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  hamburger.style.display = "none"; // Hide hamburger
  cross.style.display = "block"; // Show cross (close button)
});

// When close button (cross) is clicked, hide the sidebar
cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  hamburger.style.display = "block"; // Show hamburger again
  cross.style.display = "none"; // Hide cross
});
