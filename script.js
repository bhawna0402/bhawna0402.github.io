document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio Loaded");

  /* ================= LOTTIE ANIMATION ================= */
  const container = document.getElementById("customerLottie");

  if (container) {
    lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "images/project1.json"
    });
  } else {
    console.error("customerLottie container not found");
  }

  /* ================= FADE-IN ON SCROLL ================= */
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // performance boost
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));
});
lottie.loadAnimation({
  container: document.getElementById("project2Lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "images/project2.json"
});

lottie.loadAnimation({
  container: document.getElementById("project3Lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "images/project3.json"
});

lottie.loadAnimation({
  container: document.getElementById("project4Lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "images/project4.json"
});
/* === SKILL BAR WIDTH FIX === */
document.querySelectorAll(".bar > div").forEach(bar => {
  const level = bar.getAttribute("data-level");
  if (level) {
    bar.style.width = level;
  }
});
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".navbar nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
