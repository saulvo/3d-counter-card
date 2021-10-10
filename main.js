// selector
const card = document.querySelector('.card');

// main logic
(() => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
})();
