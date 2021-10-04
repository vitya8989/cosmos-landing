function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let navBurger = document.querySelector('.nav__burger');
let navContent = document.querySelector('.nav__content');
let navLink = document.querySelectorAll('.nav__link');
navBurger.onclick = function () {
	navBurger.classList.toggle('burger-open');
	navContent.classList.toggle('nav_mobile-open');
}
for (let i = 0; i < navLink.length; i++) {
	navLink[i].onclick = function () {
		navBurger.classList.remove('burger-open');
		navContent.classList.remove('nav_mobile-open');
	}
}

function copyToClipboard() {
	let copytext = document.createElement('input');
	copytext.value = window.location.href;
	document.body.appendChild(copytext);
	copytext.select();
	document.execCommand('copy');
	document.body.removeChild(copytext);
}

let timeOutput = document.querySelector('.time-output');
function getCurrentTimeString() {
	let nowTime = Date.now();
	let sevenMinutesFromNow = nowTime + 7 * 60 * 1000;
	return new Date(sevenMinutesFromNow).toTimeString().replace(/:[0-9]{2,2} .*/, '');
}
setInterval(
	() => timeOutput.innerHTML = getCurrentTimeString(),
	1000
);

new Swiper('.how-work-slider', {
	slidesPerView: 'auto',
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
	},
});

new Swiper('.what-credit-slider', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.what-credit__slider__btn-next',
		prevEl: '.what-credit__slider__btn-prev'
	},
	pagination: {
		el: '.what-credit__slider__bullets',
		clickable: true,
	},
	breakpoints: {
		1025: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});