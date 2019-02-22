var swiper = (function() {
	var obj = document.querySelector('.bigbox');
	imgWidth = obj.clientWidth;
	$prevBtn = document.querySelector('.left-btn');
	$nextBtn = document.querySelector('.right-btn');
	$bannerBox = document.querySelector('.banner');
	$tipBox = document.querySelector('.list');
	$tipAll = $tipBox.children;
	timer = null,
		index = 0;
	return {
		init() {
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].index = i;
			}
			var $firstImg = $bannerBox.firstElementChild;
			var $lastImg = $bannerBox.lastElementChild;
			$bannerBox.appendChild($firstImg.cloneNode(true));
			$bannerBox.insertBefore($lastImg.cloneNode(true), $firstImg);
			$bannerBox.style.left = -imgWidth + 'px';
			this.event();
		},
		event() {
			const self = this;
			$tipBox.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'LI') {
					clearInterval(timer);
					index = target.index;
					self.showImage();
				}
			}, false)
			$prevBtn.onclick = function() {
				index--;
				clearInterval(timer);
				self.showImage()
			}
			$nextBtn.onclick = function() {
				index++;
				clearInterval(timer);
				self.showImage()
			}
		},
		showImage() {
			if(index < 0) {
				$bannerBox.style.left = -($tipAll.length + 1) * imgWidth + 'px';
				index = $tipAll.length - 1;
			} else if(index > $tipAll.length - 1) {
				$bannerBox.style.left = 0;
				index = 0;
			}
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].classList.remove('active');

			}
			$tipAll[index].classList.add('active');
			$bannerBox.style.left = -(index + 1) * imgWidth + 'px';
		}
	}
}())
swiper.init();
