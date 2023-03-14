var hiddenSection = document.querySelector('.hidden-section');
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > windowHeight / 2) {
    hiddenSection.classList.add('visible');
  }
});