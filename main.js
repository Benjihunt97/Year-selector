const yearDigits = document.querySelectorAll('.year-digits');

yearDigits.forEach(cell => {
  cell.innerHTML = ''; // Ensure the container is empty
  for (let num = 0; num <= 9; num++) {
    const digit = document.createElement('div');
    digit.innerHTML = `<p>${num}</p>`;
    cell.appendChild(digit);
  }
});

const up = document.querySelectorAll('.up');
const down = document.querySelectorAll('.down');

up.forEach(upBtn => {
  upBtn.addEventListener('click', () => {
    const year = upBtn.parentElement.querySelector('.year-digits');
    year.scrollBy({
      top: -80,
      behavior: 'smooth'
    });
  });
});

down.forEach(downBtn => {
  downBtn.addEventListener('click', () => {
    const year = downBtn.parentElement.querySelector('.year-digits');
    year.scrollBy({
      top: 80,
      behavior: 'smooth'
    });
  });
});
