// GO!
// btn hide
document.querySelector('#hide-nav button').addEventListener('click', function () {
  var menu = document.querySelector('#hide-nav .nav-menu')
  if (this.textContent === 'Show nav') {
    this.textContent = 'Hide nav'
  } else {
    this.textContent = 'Show nav'
  }
  menu.classList.toggle('nav-menu-hidden')
})
