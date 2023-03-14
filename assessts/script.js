let toggleSwitch = document.querySelector('#toggle'); 
//change data-bs-theme attribute to dark theme 
toggleSwitch.addEventListener('click', function () { 
  if (toggleSwitch.getAttribute('data-bs-theme') === 'light') {
    document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'dark');
  } else {
    document.querySelector('[data-bs-theme]').setAttribute('data-bs-theme', 'light');
  }
});
