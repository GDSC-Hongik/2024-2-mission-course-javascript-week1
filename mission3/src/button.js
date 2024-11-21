const button = document.getElementById('greetButton');
const a = document.getElementById('greeting');

button.addEventListener('click', () => {
  a.textContent = '안녕'; 
});