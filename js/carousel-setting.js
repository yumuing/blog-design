new SimSwiper("#swiper-demo", {
	autoplay: 3000,
	duration: 1000,
	easing: 'ease',
	button: {
		prev: "#prev", // 前进后退按钮
		next: "#next"
	},
	pagination: {
		el: '.pagination',
		click: true // 是否可以点击
	},
	// 轮播图数据
	data: [{
		index: 0,
		href: '#',
		src: 'img/carousel-1.jpg'
	}, {
		index: 1,
		href: '#',
		src: 'img/carousel-2.png'
	}, {
		index: 2,
		href: '#',
		src: 'img/carousel-3.jpg'
	}, {
		index: 3,
		href: '#',
		src: 'img/carousel-4.jpg'
	}]
});