const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Overlay Function JavaScript
function on(num) {
  document.getElementById("overlay"+ num).style.display = "block";
}

function off(num) {
  document.getElementById("overlay"+ num).style.display = "none";
}


// Collapse function javascript
// Source: https://medium.com/dailyjs/mimicking-bootstraps-collapse-with-vanilla-javascript-b3bb389040e7
// const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

// window.addEventListener('click', (ev) => {
//   const elm = ev.target;
//   if (triggers.includes(elm)) {
//     const selector = elm.getAttribute('data-target');
//     collapse(selector, 'toggle');
//   }
// }, false);


// const fnmap = {
//   'toggle': 'toggle',
//   'show': 'add',
//   'hide': 'remove'
// };
// const collapse = (selector, cmd) => {
//   const targets = Array.from(document.querySelectorAll(selector));
//   targets.forEach(target => {
//     target.classList[fnmap[cmd]]('show');
//   });
// }



