document.addEventListener("DOMContentLoaded", function() {
  var btnMenu = document.querySelector(".header__menu-status");
  var header = document.querySelector(".header");
  btnMenu.addEventListener("click", function() {
    if (btnMenu.checked) {
      document.body.style.overflow = "hidden";
      document.body.style.background = "#eee";
      header.style.background = "#eee";
    } else {
      document.body.style.overflow = "visible";
      header.style.background = "var(--white-color)";
      
      document.body.style.background = "var(--white-color)";
    }
  });

  // ---------------------------- HEADER SLIDER ---------------------
  var headerArr = document.querySelectorAll(".header-arr");
  var slideList = document.querySelectorAll(".header-slide");
  var dotList = document.querySelectorAll(".header-dot");
  var currentSlide = 0;
  function turnLeftSlide() {
    var left = 100;
    var nextLeft = 0;
    var previousSlide = currentSlide % 4;
    var nextSlide = ++currentSlide % 4;
    currentSlide = nextSlide;
    dotList[nextSlide].classList.add("active");
    dotList[previousSlide].classList.remove("active");
    var intervalID = setInterval(function() {
      slideList[Math.abs(nextSlide)].style.left = --left + "%";
      slideList[Math.abs(nextSlide)].style.left = --left + "%";
      slideList[Math.abs(previousSlide)].style.left = --nextLeft + "%";
      slideList[Math.abs(previousSlide)].style.left = --nextLeft + "%";
      if (left == 0) clearInterval(intervalID);
    }, 1);
  }
  headerArr[0].addEventListener("click", function() {
    clearInterval(autoSlide);
    turnRightSlide();
    autoSlide = setInterval(function() {
      turnLeftSlide();
    }, 4000);
  });
  function turnRightSlide() {
    var left = 0;
    var nextLeft = -100;
    var previousSlide = currentSlide % 4;
    var nextSlide = Math.abs(currentSlide + 3) % 4;
    currentSlide = nextSlide;
    dotList[nextSlide].classList.add("active");
    dotList[previousSlide].classList.remove("active");
    var intervalID = setInterval(function() {
      slideList[previousSlide].style.left = ++left + "%";
      slideList[nextSlide].style.left = ++nextLeft + "%";
      slideList[previousSlide].style.left = ++left + "%";
      slideList[nextSlide].style.left = ++nextLeft + "%";
      if (left == 100) clearInterval(intervalID);
    }, 1);
  }
  headerArr[1].addEventListener("click", function() {
    clearInterval(autoSlide);
    turnLeftSlide();
    autoSlide = setInterval(function() {
      turnLeftSlide();
    }, 4000);
  });
  var autoSlide = setInterval(function() {
    turnLeftSlide();
  }, 4000);
  dotList.forEach(function(dot, i) {
    dot.addEventListener("click", function() {
      clearInterval(autoSlide);
      if (currentSlide < i) {
        var left = 100;
        var nextLeft = 0;
        dot.classList.add("active");
        dotList[currentSlide].classList.remove("active");
        var temp = currentSlide;
        var intervalID = setInterval(function() {
          slideList[i].style.left = --left + "%";
          slideList[i].style.left = --left + "%";
          slideList[temp].style.left = --nextLeft + "%";
          slideList[temp].style.left = --nextLeft + "%";
          if (left == 0) clearInterval(intervalID);
        }, 1);
      } else if (currentSlide > i) {
        var left = 0;
        var nextLeft = -100;
        var temp = currentSlide;
        dot.classList.add("active");
        dotList[currentSlide].classList.remove("active");
        var intervalID = setInterval(function() {
          slideList[temp].style.left = ++left + "%";
          slideList[i].style.left = ++nextLeft + "%";
          slideList[temp].style.left = ++left + "%";
          slideList[i].style.left = ++nextLeft + "%";
          if (left == 100) clearInterval(intervalID);
        }, 1);
      }
      currentSlide = i;
      autoSlide = setInterval(function() {
        turnLeftSlide();
      }, 4000);
    });
  });

  //   Swipe slider
  var headerSlider = document.querySelector('.header__slider');
  headerSlider.addEventListener("touchstart", handleTouchStart, false);
  headerSlider.addEventListener("touchend", handleTouchEnd, false);
  var xDown = null;

  function handleTouchStart(evt) {
    const firstTouch = evt.changedTouches[0];
    xDown = firstTouch.clientX;
  }

  function handleTouchEnd(evt) {
    var xUp = evt.changedTouches[0].clientX;
    var xDiff = xDown - xUp;
    clearInterval(autoSlide);
    if (xDiff > 0) {
      turnLeftSlide();
    } else if (xDiff < 0) {
      turnRightSlide();
    }
    autoSlide = setInterval(function() {
      turnLeftSlide();
    }, 4000);
    xDown = null;
  }
});

