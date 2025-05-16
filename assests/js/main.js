let splideInstances = [];

function initSplides() {
  splideInstances.forEach((instance) => instance.destroy(true));
  splideInstances = [];
  document
    .querySelectorAll(".testimonial-sec .testimonial-slider")
    .forEach((ts, index) => {
      const splide = new Splide(ts, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        pagination: false,
        arrows: false,
        gap: "20px",
        autoScroll: {
          speed: index % 2 ? -0.5 : 0.5,
        },
        breakpoints: {
          1440: {
            perPage: window.innerWidth >= 1210 ? 2 : 1,
            autoWidth: window.innerWidth >= 1210 ? false : true,
          },
          1024: {
            perPage: 1,
            autoWidth: true,
          },
        },
      });

      splide.mount(window.splide.Extensions);
      splideInstances.push(splide);
    });
}

document.addEventListener("DOMContentLoaded", initSplides);

window.addEventListener("resize", () => {
  clearTimeout(window.__splideResizeTimeout);
  window.__splideResizeTimeout = setTimeout(() => {
    initSplides();
  }, 200);
});

//dark-theme

const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
