// console.log(chrome);

const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

document.body.appendChild(button);
