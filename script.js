'use strict'

const menuButton = document.getElementsByTagName('button')[0]
const navBar = document.getElementsByTagName('nav')[0]

menuButton.addEventListener('click', function () {
  navBar.classList.toggle('displayed')
})
