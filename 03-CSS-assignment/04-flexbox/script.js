const totalSlide = 25;
let slideIndex = 1;

const getSlide = (n, t) => `
  <div class="my-slides">
    <div class="numbertext">${n} / ${t}</div>
    <img src="${n}.jpg" style="width:100%" alt="Flexbox Froggy ${n}">
  </div>`;

const getThumb = (n) => `
  <div class="column">
    <img class="demo cursor"
        src="${n}.jpg"
        style="width:100%"
        onclick="currentSlide(${n})"
        alt="Flexbox Froggy ${n}">
  </div>`;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('demo');
  const captionText = document.getElementById('caption');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

(() => {
  document.getElementById('carousel').innerHTML = ((t) => {
    let i = 1;
    let content = '';
    while (i <= t) {
      content += getSlide(i, t);
      i += 1;
    }
    return content;
  })(totalSlide);

  document.getElementById('thumbnail').innerHTML = ((t) => {
    let i = 1;
    let content = '';
    while (i <= t) {
      content += getThumb(i);
      i += 1;
    }
    return content;
  })(totalSlide);

  showSlides(slideIndex);
})();
