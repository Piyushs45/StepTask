const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const lineFill = document.querySelector('.line-fill');
let currentActive = 0;

nextButton.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length - 1) {
    currentActive = circles.length - 1;
  }
  updateCircles();
});

prevButton.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 0) {
    currentActive = 0;
  }
  updateCircles();
});

function updateCircles() {
  circles.forEach((circle, index) => {
    if (index <= currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update the line fill
  const progress = (currentActive / (circles.length - 1)) * 100;
  lineFill.style.width = `${progress}%`;

  // Disable buttons at start or end
  if (currentActive === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentActive === circles.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

updateCircles(); // Initialize
