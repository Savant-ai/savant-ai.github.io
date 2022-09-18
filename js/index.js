const hamburger = document.querySelector('#header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('#header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('#header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header .container');


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

/////////////////////
// About Us Slider //
/////////////////////
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace('about_us_active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " about_us_active";
}


//////////////////////////
// Testimonials Section //
//////////////////////////
var testimonialbtn = document.getElementsByClassName("testimonialbtn");
var slide = document.getElementById("slide");
	
	testimonialbtn[0].onclick = function(){
		slide.style.transform="translatex(0px)";
		
		for(i=0;i<3;i++){
			testimonialbtn[i].classList.remove("active-card");
			this.classList.add("active-card");
		}
										  }
	testimonialbtn[1].onclick = function(){
		slide.style.transform="translatex(-800px)";
		
		for(i=0;i<3;i++){
			testimonialbtn[i].classList.remove("active-card");
			this.classList.add("active-card");
										  }
	}
	testimonialbtn[2].onclick = function(){
		slide.style.transform="translatex(-1600px)";
		
		for(i=0;i<3;i++){
			testimonialbtn[i].classList.remove("active-card");
			this.classList.add("active-card");
										  }
	}
	
