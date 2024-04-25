document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Your code here...
  // BACK BUTTON RELOAD
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  });

  /* HAMBURGER */
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    document.querySelector(".side-widget").classList.toggle("active");
    document.querySelector(".section-wrapper").classList.toggle("no-transform");
  });

  // SEARCH
  var searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", function () {
    document.querySelector(".search-box").classList.toggle("active");
    document.querySelector(".section-wrapper").classList.toggle("no-transform");
  });

  // PAGE TRANSITION
  var bodyLinks = document.querySelectorAll("body a");
  bodyLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = this.getAttribute("target");
      var fancybox = this.getAttribute("data-fancybox");
      var url = this.getAttribute("href");

      if (
        target !== "_blank" &&
        typeof fancybox === "undefined" &&
        url.indexOf("#") < 0
      ) {
        e.preventDefault();

        if (url.indexOf("#") !== -1) {
          var hash = url.substring(url.indexOf("#"));

          if (document.querySelector("body " + hash) !== null) {
            document
              .querySelector(".page-transition")
              .classList.remove("active");
          }
        } else {
          document.querySelector(".page-transition").classList.toggle("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
        }
      }
    });
  });

  // TAB
  var tabNavItems = document.querySelectorAll(".tab-nav li");
  tabNavItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".tab-item").forEach(function (tab) {
        tab.style.display = "none";
      });
      document.querySelectorAll(".tab-nav li").forEach(function (navItem) {
        navItem.classList.remove("active");
      });
      this.classList.add("active");
      var selectedTab = this.querySelector("a").getAttribute("href");
      document.querySelector(selectedTab).style.display = "block";
    });
  });

  // DATA BACKGROUND IMAGE
  var pageSections = document.querySelectorAll("*");
  pageSections.forEach(function (section) {
    if (section.hasAttribute("data-background")) {
      section.style.background =
        "url(" + section.getAttribute("data-background") + ")";
    }
  });

  // DATA BACKGROUND COLOR
  var pageSections = document.querySelectorAll("*");
  pageSections.forEach(function (section) {
    if (section.hasAttribute("data-background")) {
      section.style.background = section.getAttribute("data-background");
    }
  });

  // IMAGE BOX CAROUSEL
  var swiperImageBox = new Swiper(".image-box-carousel", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });

  // SLIDER
  var sliderImages = new Swiper(".slider-images", {
    spaceBetween: 0,
    direction: "vertical",
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    touchRatio: 0,
    pagination: {
      el: ".swiper-fraction",
      type: "fraction",
    },
    loop: true,
    loopedSlides: 1,
    thumbs: {
      swiper: sliderTexts,
    },
  });

  // SLIDER THUMBS
  var sliderTexts = new Swiper(".slider-texts", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  if (document.querySelector(".slider-images")) {
    sliderImages.controller.control = sliderTexts;
    sliderTexts.controller.control = sliderImages;
  }

  // KINETIC TEXTS
  var kineticTexts = new Swiper(".kinetic-texts", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,
    effect: "fade",
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  /* COLLECTION SLIDER */

  // SLIDER
  var artSliderImages = new Swiper(".art-slider-images", {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 4,
    thumbs: {
      swiper: artSliderContent,
    },
    breakpoints: {
      1024: {
        loopedSlides: 3,
      },
      768: {
        loopedSlides: 2,
      },
      640: {
        loopedSlides: 1,
      },
      320: {
        loopedSlides: 1,
      },
    },
  });

  // SLIDER THUMBS
  var artSliderContent = new Swiper(".art-slider-content", {
    spaceBetween: 30,
    direction: "vertical",
    slidesPerView: 4,
    loop: true,
    loopedSlides: 4,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  if (document.querySelector(".art-slider-images")) {
    artSliderImages.controller.control = artSliderContent;
    artSliderContent.controller.control = artSliderImages;
  }

  // LOCOMOTIVE
  gsap.registerPlugin(ScrollTrigger);
  var locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    class: "is-inview",
  });
  ScrollTrigger.addEventListener("refresh", function () {
    return locoScroll.update();
  });
  ScrollTrigger.refresh();
});
