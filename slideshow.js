const slides = [
  {
    quote: "May the 4th be with u",
    imgSrc: "./imgs/trooper.jpg"
  },
  {
    quote: "Patience you must have , my young padawan",
    imgSrc: "./imgs/yoda.jpg"
  },
  {
    quote: "I'm your father Luke",
    imgSrc: "./imgs/vador.jpg"
  }
];

// Init slideshow
const slideshow = document.getElementById("slideshow");
const slideQuote = document.getElementById("slideQuote");
const btnCont = document.getElementById("slideBtnCont");

// Init default slide
slideshow.style.background = `url(${slides[0].imgSrc})`;
slideQuote.innerText = slides[0].quote;
slideshow.style.backgroundSize = "cover";
slideshow.style.backgroundRepeat = "no-repeat";
slideshow.style.backgroundPosition = "center";

// Create slide and button for each objects
slides.forEach(slide => {
  // Destructure slide object
  const { quote, imgSrc } = slide;

  let button = document.createElement("button");
  button.className = "btn btn-default btn-circle";
  button.id = "slideshowBtn";

  // On click
  button.addEventListener("click", () => {
    // Change slideshow background
    slideshow.style.background = `url(${imgSrc})`;
    slideshow.style.backgroundSize = "cover";
    slideshow.style.backgroundRepeat = "no-repeat";
    slideshow.style.backgroundPosition = "center";
    // Change quote
    slideQuote.innerText = quote;
  });

  btnCont.appendChild(button);
});
