// When doc is ready --> exec anim
document.addEventListener("DOMContentLoaded", () => {
  progressBarAnim(75, 20);
  progressDonutAnim(60, 30);
});

// Progress bar anim
function progressBarAnim(percent, interval) {
  let width = 0;
  let bar = document.getElementById("barValue");
  let percentNumber = document.getElementById("barPercent");

  var id = setInterval(progress, interval);
  function progress() {
    // If bar progress to his percent goal
    if (width >= percent) {
      // Stop it
      clearInterval(id);
    } else {
      // Increment width and percent number
      width++;
      percentNumber.innerText = width + "%";
      bar.style.width = width + "%";
    }
  }
}

// Donut progress anim
function progressDonutAnim(percent, interval) {
  let circle = document.getElementById("two");
  let text = document.getElementById("percent-two");
  let angle = 0;
  percent = percent * 4.7;

  window.timer = window.setInterval(() => {
    circle.setAttribute("stroke-dasharray", angle + ", 20000");
    text.innerHTML = parseInt((angle / 471) * 100) + " %";

    if (angle >= percent) {
      window.clearInterval(window.timer);
    }
    angle += 7;
  }, interval);
}
