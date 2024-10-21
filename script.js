const navigationMenu = document.getElementById('navigationMenu');


window.addEventListener('resize', function () {
	if (window.innerWidth >= 1240) {
		hideNavigationMenu();
		isMenuOpen = false
		buttonBurger.classList.remove('open')
	}
})



function showNavigationMenu() {
	navigationMenu.style.top = '10vh';
}

function hideNavigationMenu() {
	navigationMenu.style.top = '-100vh'
}


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

const buttonBurger = document.querySelector('.button-burger');
let isMenuOpen = false
buttonBurger.addEventListener('click', () => {
	if (!isMenuOpen) {
		isMenuOpen = true;
		buttonBurger.classList.add('open');
		showNavigationMenu();
	} else {
		isMenuOpen = false;
		buttonBurger.classList.remove('open')
		hideNavigationMenu();
	}
})

function hideMainNavigationMenu() {
	
}




