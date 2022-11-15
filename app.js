var mouseCursor = document.querySelector('.cursor');


window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + "px";
}

const imgBx = document.querySelector(".imgBx");
const slides = imgBx.getElementsByTagName("img");
console.log(slides);
let i = 0;

function nextSlide() {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}

function prevSlide() {
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
}

let sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";

}
function closeMenu(){
    sideMenu.style.right = "-200px";

}



// // const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })


let contactDetails = document.getElementById('contact-details');


function contact(){
    contactDetails.innerText= "I am currenctly living in Vyazemskiy Pereulok, Saint Petersburg. You can contact me directly by Whatsapp. For that click on the icons.";

}
contact();

let skills = document.getElementById("skills");
skills.innerHTML = "Skills: Html, CSS, Adobe PhotoShop, Adobe Premiere Pro, Microsoft Office, Microsoft Office Packages, Java, python, JS ";