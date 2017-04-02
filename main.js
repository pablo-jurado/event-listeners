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

// task #3
document.querySelector('#add-guest-bonus input').addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (this.value !== '') {
      // create btn
      var btn = document.createElement('button')
      btn.innerHTML = 'X'
      btn.addEventListener('click', function () {
        this.parentElement.remove()
      })
      // create li element
      var liElement = document.createElement('li')
      liElement.classList.add('guest')
      liElement.textContent = this.value
      liElement.appendChild(btn)
      // get ul from DOM
      var ulElement = document.querySelector('#add-guest-bonus .guest-list')
      ulElement.appendChild(liElement)
      this.value = ''
    }
  }
})
