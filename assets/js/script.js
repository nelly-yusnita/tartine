// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu');
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu');

	navMenu.classList.remove('show-menu');
	menuButton.classList.remove('close-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header');

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME SLIDES ===== //
const homeSwiper = new Swiper(".home__container", {
	spaceBetween: 30,
	loop: 'true',

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// ====== end home slides ===== //

// ===== MENU CAROUSEL ===== //
const menuSwiper = new Swiper('.menu__container', {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// ===== end menu carousel ===== //

// ===== GALLERY ===== //
const gallerySwiper = new Swiper(".gallery__swiper", {
	spaceBetween: 0,
	loop: 'true',
	grabCursor: true,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		568: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
// ===== end gallery ===== //

// ===== SHOW SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end show scroll up ===== //

// ===== AOS ANIMATE ===== //
// 1. home // home__slide

// 2. fitur // fitur__content
const fiturContent = document.querySelectorAll('.fitur__content');
fiturContent.forEach((n, i) => {
	n.dataset.aos = 'zoom-in-down';
	n.dataset.aosDelay = i * 100;
});

// 3. story // .story__img, .story__data

// 4. reusable css classes // .section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 5. menu // .menu__container

// 6. banner // .banner__img-1, .banner__data, .banner__img-2, .banner__data-2

// 7. location // .location__img, .location__description, .button__box, .decoration__img

// 8. merchandise // .merchandise__box, .button__box
const merchandiseBox = document.querySelectorAll('.merchandise__box');
merchandiseBox.forEach((n, i) => {
	n.dataset.aos = 'zoom-in-down';
	n.dataset.aosDelay = i * 100;
});

// 9. promo // .promo__box

// 10. social media // .social__media

// 11. gallery // .gallery

// 12. footer // .footer

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end animate ===== //
