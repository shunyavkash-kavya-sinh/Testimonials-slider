document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".testimonial-sec .testimonial-slider")
    .forEach((ts, index) => {
      new Splide(ts, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 4,
        pagination: false,
        arrows: false,
        gap: "20px",
        autoScroll: false,
        autoScroll: {
          speed: index % 2 ? "-0.5" : "0.5",
        },
        breakpoints: {
          1024: {
            perPage: 1,
            autoWidth: true,
          },
        },
      }).mount(window.splide.Extensions);
    });
});

//dark-theme

const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
