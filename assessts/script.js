// let toggleSwitch = document.querySelector('#toggle'); 
// //change data-bs-theme attribute to dark theme 
// toggleSwitch.addEventListener('click', function () { 
//   console.log('get');
//   if (toggleSwitch.getAttribute('data-bs-theme') === 'light') {
//     document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'dark');
//   } else {
//     document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'light');
//   }
// });


const button = document.querySelector('.btn.btn-light');
const html = document.querySelector('html');

button.addEventListener('click', () => {
  if (html.dataset.bsTheme === 'dark') {
    html.dataset.bsTheme = 'light';
  } else {
    html.dataset.bsTheme = 'dark';
  }
});