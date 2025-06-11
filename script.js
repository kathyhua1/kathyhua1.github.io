// Cursor Animation
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
