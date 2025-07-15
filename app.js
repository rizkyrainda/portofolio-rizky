const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;
  let currentImages = [];

  const allImgs = document.querySelectorAll('#projects .project-img img');

  allImgs.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      // Temukan container project-item
      const projectContainer = img.closest('.project-img');
      // Ambil semua gambar di dalam project tersebut
      currentImages = Array.from(projectContainer.querySelectorAll('img'));
      // Tetapkan index gambar yang diklik dalam array gambar project ini
      currentIndex = currentImages.indexOf(img);
      showImage(currentIndex);
    });
  });

  function showImage(index) {
    if (currentImages.length > 0) {
      modalImg.src = currentImages[index].src;
      modal.classList.add('show');
    }
  }

  closeBtn.onclick = function () {
    modal.classList.remove('show');
  };

  nextBtn.onclick = function () {
    if (currentImages.length > 0) {
      currentIndex = (currentIndex + 1) % currentImages.length;
      showImage(currentIndex);
    }
  };

  prevBtn.onclick = function () {
    if (currentImages.length > 0) {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      showImage(currentIndex);
    }
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  };

   const bgMusic = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('toggleMusic');
  let isPlaying = true;

  // Unmute on first user interaction
  document.addEventListener('click', function autoPlayOnce() {
    bgMusic.muted = false;
    bgMusic.play();
    document.removeEventListener('click', autoPlayOnce);
  });

  toggleBtn.addEventListener('click', function () {
    if (isPlaying) {
      bgMusic.pause();
      toggleBtn.innerText = '🔈 Play Music';
    } else {
      bgMusic.play();
      toggleBtn.innerText = '🔇 Stop Music';
    }
    isPlaying = !isPlaying;
  });

});





