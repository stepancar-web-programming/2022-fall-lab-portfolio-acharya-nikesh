/* eslint-env jquery */

$(window).on('load', function () {
  jQuery('.loader').fadeOut(1800)
  jQuery('.navbar').fadeIn(1800)
  jQuery('li').fadeIn(7000)
  jQuery('span').fadeIn(7000)
  jQuery('.cursor').fadeIn(6000)
  jQuery('#header').fadeIn(6000)
  jQuery('.wrapper').fadeIn(6000)
  jQuery('.contact-left').fadeIn(6000)
  jQuery('.contact-right').fadeIn(6000)
  jQuery('#sliding').fadeIn(6000)
  jQuery('#about').fadeIn(6000)
})
const mouseCursor = document.querySelector('.cursor')
window.addEventListener('mousemove', cursor)
function cursor (e) {
  mouseCursor.style.top = e.pageY + 'px'
  mouseCursor.style.left = e.pageX + 'px'
}

const imgBx = document.querySelector('.imgBx')
const slides = imgBx.getElementsByTagName('img')
console.log(slides)
let i = 0

function nextSlide () { // eslint-disable-line no-unused-vars
  slides[i].classList.remove('active')
  i = (i + 1) % slides.length
  slides[i].classList.add('active')
}

function prevSlide () { // eslint-disable-line no-unused-vars
  slides[i].classList.remove('active')
  i = ((i - 1) === -1) ? 2 : (i - 1) % slides.length
  slides[i].classList.add('active')
}

const sideMenu = document.getElementById('sideMenu')

function openMenu () { // eslint-disable-line no-unused-vars
  sideMenu.style.right = '0'
}
function closeMenu () { // eslint-disable-line no-unused-vars
  sideMenu.style.right = '-200px'
}

const contactDetails = document.getElementById('contact-details')

function contact () {
  contactDetails.innerText =
    'I am currenctly living in Vyazemskiy Pereulok, Saint Petersburg. You can contact me directly by Whatsapp. For that click on the icons.'
}
contact()
const skills = document.getElementById('skills')
skills.innerHTML =
  'Skills: Html, CSS, Adobe PhotoShop, Adobe Premiere Pro, Microsoft Office, Microsoft Office Packages, Java, python, JS'
