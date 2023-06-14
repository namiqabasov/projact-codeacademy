$(".fade").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,

  autoplaySpeed: 2000,
});
$(".swiper-wrapper").slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,

  autoplaySpeed: 2000,
});

const slicknext = (document.querySelector(
  ".slick-next"
).innerHTML = `<i class="fa-solid fa-chevron-right"></i>`);
const slickprev = (document.querySelector(
  ".slick-prev"
).innerHTML = `<i class="fa-solid fa-chevron-left"></i>`);
