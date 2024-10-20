function checkWindowWidth() {
	if (window.innerWidth > 1215) {
		moveNavigationElements(0);
	} else if (window.innerWidth <= 745) {
		moveNavigationElements(6);
	} else if (window.innerWidth <= 890) {
		moveNavigationElements(4);
	} else if (window.innerWidth <= 1030) {
		moveNavigationElements(3);
	} else if (window.innerWidth <= 1215) {
		moveNavigationElements(2);
	}


}

function moveNavigationElements(hiddenCount) {
	const navigationElements = Array.from(
		document.getElementsByClassName('nav__menu-element')
	)

	if (hiddenCount === 0) {
		navigationElements.forEach(element => {
			element.style.display = 'block'
		})
	} else {
		navigationElements.forEach((element, index) => {
			if (index >= navigationElements.length - hiddenCount) {
				element.style.display = 'none'
			} else {
				element.style.display = 'block'
			}
		})
	}


}

window.addEventListener('resize', checkWindowWidth)

checkWindowWidth();

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		750: {
			slidesPerView: 3,
		},
	},
})

AOS.init()