var imageSlider = 1;
showSlides(imageSlider);

function nextSlides(n) {
  showSlides(imageSlider += n);
}

function currentSlide(n) {
  showSlides(imageSlider = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {imageSlider = 1} 
  if (n < 1) {imageSlider = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imageSlider-1].style.display = "block"; 
  dots[imageSlider-1].className += " active";
}

