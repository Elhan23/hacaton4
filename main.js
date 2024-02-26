document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const coverImage = document.getElementById('coverImage');
  const coverInfo = document.getElementById('coverInfo');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const imageSrc = this.getAttribute('data-image');
      coverImage.src = imageSrc;  
      coverInfo.innerHTML = "Дополнительная информация о книге";
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const h2Element = document.getElementById("h2_cont");
    const textBlock = document.querySelector(".text_block");

    if (isElementInViewport(h2Element)) {
      h2Element.classList.add("animated");
    }
    if (isElementInViewport(textBlock)) {
      textBlock.classList.add("animated");
    }
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

// swiper


var swiper = new Swiper('.swiper-container', {
 spaceBetween: 30,
 centeredSlides: true,
 autoplay: {
 delay: 2500,
 disableOnInteraction: false,
 },
pagination: {
el: '.swiper-pagination',
clickable: true,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});


document.addEventListener("DOMContentLoaded", function() {
  var animation = lottie.loadAnimation({
      container: document.querySelector('.animationRecipe'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'svg/recipeanimation.json' 
  });
});
