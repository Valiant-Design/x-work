let navigation_bar = document.querySelector(".navbar");
let menus_btn = document.querySelector(".ri-menu-4-line");
let close_btn = document.querySelector(".ri-close-fill");
let home_click = document.querySelector("#home");
let header_bar = document.querySelector("header");
const faqs = document.querySelectorAll('.faq');

menus_btn.addEventListener("click", function () {
  navigation_bar.classList.add("active");
  menus_btn.classList.add("leave");
});

close_btn.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
});

home_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
});

function myfunc(event) {
  event.preventDefault();
}

(function () {
  function updateReadProgressBar() {
    const root = document.documentElement;
    const winScrollTop = root.scrollTop;
    const winScrollHeight = root.scrollHeight;
    const height = root.scrollHeight - root.clientHeight;
    const progressBarWidth = (winScrollTop / height) * 100;

    root.style.setProperty("--scroll-progress-width", progressBarWidth + "%");

    // document.querySelector('.scroll-progress div').style.width = progressBarWidth + '%';

    console.log(progressBarWidth);

    if (progressBarWidth >= 1.039570725899587) {
      header_bar.classList.add("disapper");
    } else {
      header_bar.classList.remove("disapper");
    }
  }

  window.addEventListener("load", updateReadProgressBar);
  window.addEventListener("scroll", updateReadProgressBar);
})();

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
      faq.classList.toggle("active");
  });
});