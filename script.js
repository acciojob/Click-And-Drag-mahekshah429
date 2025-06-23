const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseup', () => {
  isDown = false;
});

items.addEventListener('mouseleave', () => {
  isDown = false;
});

items.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 1.5; // speed factor
  items.scrollLeft = scrollLeft - walk;
});