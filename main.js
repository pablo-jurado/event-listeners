// GO!

// btn hide menu
document.querySelector('#hide-nav button').addEventListener('click', function () {
  var menu = document.querySelector('#hide-nav .nav-menu')
  if (this.textContent === 'Show nav') {
    this.textContent = 'Hide nav'
  } else {
    this.textContent = 'Show nav'
  }
  menu.classList.toggle('nav-menu-hidden')
})

// add list item
document.querySelector('#add-guest input').addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (this.value !== '') {
      var liElement = document.createElement('li')
      var ulElement = document.querySelector('#add-guest .guest-list')
      liElement.classList.add('guest')
      liElement.textContent = this.value
      ulElement.appendChild(liElement)
      this.value = ''
    }
  }
})
