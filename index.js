const heading = document.querySelector('#heading');
const button = document.querySelector('#button');

console.log(heading.textContent);

button.addEventListener('click', () => {
  heading.textContent = 'Dynamically changed heading with JavaScript!';
});

