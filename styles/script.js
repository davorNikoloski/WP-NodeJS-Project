
//----------------GALLERY--------------------------------
const mainImg = document.getElementById('main-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn'); 
const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg', '/images/img5.jpg', '/images/img6.jpg', '/images/img7.jpg', '/images/img8.jpg', '/images/img9.jpg', '/images/img10.jpg'];
let currentImgIndex = 0;
  
prevBtn.addEventListener('click', () => {
  currentImgIndex--;
  if (currentImgIndex < 0) {
      currentImgIndex = images.length - 1;
      }
      mainImg.src = images[currentImgIndex];
      });
      
      nextBtn.addEventListener('click', () => {
      currentImgIndex++;
      if (currentImgIndex >= images.length) {
      currentImgIndex = 0;
      }
      mainImg.src = images[currentImgIndex];
  });



