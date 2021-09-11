window.addEventListener('scroll',function() {
	var header = document.querySelector('header');
	header.classList.toggle('sticky',scrollY > 50);
})

$(window).scroll(function(){
	if ($(window).scrollTop() > 500) {
		$('.scrollup').show();
	}
	else{
		$('.scrollup').hide();
	}
})
$('.scrollup').click(function(){
	$('html').animate({scrollTop:0},1000);
})

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 5,
	autoplay:true,
	
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
	  640: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  768: {
		slidesPerView: 2,
		spaceBetween: 10,
	  },
	  1024: {
		slidesPerView: 3,
		spaceBetween: 10,
	  },
	  1200: {
		slidesPerView: 4,
		spaceBetween: 10,
	  },
	},
  });