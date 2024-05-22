const yearDigits = document.querySelectorAll('.year-digits');

for (let num = 1; num <= 9; num++) {
  yearDigits.innerHTML = '';
  
  yearDigits.forEach(cell => {
    const digit = document.createElement('div');
    digit.innerHTML = `<p>${num}</p>`;
    cell.appendChild(digit);
  });
}

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
  
})
