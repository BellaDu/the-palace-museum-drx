/*
pre-loader
*/
/*setup*/
var loader = document.querySelector(".loader");

/*define behavior*/
function fadeout() {
  loader.classList.add("none");
}

/*wire it up*/
window.addEventListener("load", fadeout);

/*change content*/
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
/*define behavior*/
function change() {
  document.getElementById(
    "hisp1"
  ).innerHTML = `The Palace Museum houses over 180,000 pieces 
  in the textile collection. These exquisite holdings include a wide variety of garments, 
  accessories, uncut fabric, and silk cloth manufactured for imperial use on occasions such as grand ceremonies, 
  ritual sacrifices, and inspection tours. 
  The extensive collection provides ample resources for specific topics in the study of textiles and design as 
  researchers explore various aspects of the source materials, manufacturing process, craftsmanship, symbolism, 
  and structural patterns of the emperor’s attire.`;
  document.getElementById("hisi1").src = "./images/history/his4.jpg";
}

function back() {
  document.getElementById("hisp1").innerHTML = `Established in 1925, 
  the Palace Museum was installed in the imperialpalace of two consecutive dynasties: 
  The Ming Dynasty and the QingDynasty. <br />
  From 1420 to 1644, the Forbidden City was the home of 14 emperorsof the Ming Dynasty. <br />
  From October 1644, the Forbidden City served as the imperial palaceof the Qing Dynasty. <br />
  In 1987, it was officially became the UNESCO World Heritage Site.<br />
  Now, it is one of the most prestigious museums in China and theworld at large.`;
  document.getElementById("hisi1").src = "./images/history/his7.jpg";
}

/*wire it up*/
btn4.addEventListener("click", change);
btn3.addEventListener("click", back);

/*
mobile collection effect
*/

/*
公式
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

*/
var options = {
  root: null,
  threshold: 0.25,
};

function intersectionHandler(entries, observer) {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // entry.isIntersecting; target represents each element
    if (entry.isIntersecting) {
      // add active if intersecting
      entry.target.classList.add("active");
    } else {
      // remove active if intersecting
      entry.target.classList.remove("active");
    }
  });
}

var observer = new IntersectionObserver(intersectionHandler, options);

/*get the elements*/
var images = document.querySelectorAll(".ci");

images.forEach((image) => {
  observer.observe(image);
});

/*
slide show
*/
/*
Basic setup
Step1: Get all elements needed;
Step2: Define current, min, max index 
*/
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

var currentIndex = 0;
var minIndex = 0;
var maxIndex = slides.length - 1;

/*
Define Behavior
Remove from current
Add to new
*/

function toggleSlide(from, to) {
  slides[from].classList.remove("active");
  slides[to].classList.add("active");
}

function changeIndex(plus) {
  var newIndex = currentIndex + plus;
  /* next>max */
  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < minIndex) {
    newIndex = maxIndex;
  }

  toggleSlide(currentIndex, newIndex);
  currentIndex = newIndex;
}
function incrementIndex() {
  changeIndex(1);
}

function decrementIndex() {
  changeIndex(-1);
}

/* Wire it up*/
nextButton.addEventListener("click", incrementIndex);
backButton.addEventListener("click", decrementIndex);

/*
source reveal
*/

/*get the elements; setup*/
var include = document.querySelector(".include");
var btn2 = document.querySelector("#btn2");
var x = document.querySelector(".x");

/*define behaviors*/
function appear() {
  /*when we click on the button, this function will work, call the container to 
  appear and change the text alignment to block*/
  include.style.display = "block";
}

function disappear() {
  include.style.display = "none";
}

/*wire it up*/
btn2.addEventListener("click", appear);
x.addEventListener("click", disappear);
