// When doc is ready --> exec anim
document.addEventListener("DOMContentLoaded", function() {
  progressBarAnim(75);
});

// Progress bar anim
function progressBarAnim(percent) {
  let width = 0;
  let bar = document.getElementById("barValue");
  let percentNumber = document.getElementById("barPercent");

  var id = setInterval(frame, 20);
  function frame() {
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
