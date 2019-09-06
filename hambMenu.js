const menuBtn = document.getElementById("hambBtn");
const hambMenu = document.getElementById("hambMenu");
const closeBtn = document.getElementById("closeHambBtn");

// Open menu
menuBtn.addEventListener("click", () => {
  fadeIn(hambMenu);
});

// Close menu
closeBtn.addEventListener("click", () => {
  fadeOut(hambMenu);
});

// Fade animation
function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
