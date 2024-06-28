
//when you hover over an image, change the text to something else

let slideIndex = 1;
showSlides(slideIndex);

// The Next Button

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Control the image
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length

  }
  //hide the other slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //change the slide
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
