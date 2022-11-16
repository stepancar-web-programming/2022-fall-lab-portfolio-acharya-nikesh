let mouseCursor = document.querySelector('.cursor')
window.addEventListener('mousemove', cursor)
function cursor (e) {
  mouseCursor.style.top = e.pageX
  mouseCursor.style.left = e.pageX}

const imgBx = document.querySelector('.imgBx')
const slides = imgBx.getElementsByTagName('img')
console.log(slides)
let i = 0

function nextSlide () {
  slides[i].classList.remove('active')
  i = (i + 1) % slides.length
  slides[i].classList.add('active')
}

const sideMenu = document.getElementById('sideMenu')

function openMenu () {
  sideMenu.style.right = '0'
}
function closeMenu() {
  sideMenu.style.right = '-200px'
}

const contactDetails = document.getElementById('contact-details')

function contact () {
  contactDetails.innerText = 'I am currenctly living in Vyazemskiy Pereulok, Saint Petersburg. You can contact me directly by Whatsapp. For that click on the icons.'
}
contact()
const skills = document.getElementById('skills')
skills.innerHTML = 'Skills: Html, CSS, Adobe PhotoShop, Adobe Premiere Pro, Microsoft Office, Microsoft Office Packages, Java, python, JS'
