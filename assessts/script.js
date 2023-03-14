
let toggleSwitch = document.querySelector('#toggle'); 
//change data-bs-theme attribute to dark theme 
toggleSwitch.addEventListener('click', function () { 
  document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'dark'); 
});
