let navigation_bar = document.querySelector(".navbar");
let menus_btn = document.querySelector(".ri-menu-4-line");
let close_btn = document.querySelector(".ri-close-fill");
let home_click = document.querySelector("#hom");
let about_click = document.querySelector("#abo");
let benefits_click = document.querySelector("#ben");
let faq_click = document.querySelector("#qaf");
let contact_click = document.querySelector("#con");
let waitlist_click = document.querySelector(".btn-join-second");
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
  menus_btn.classList.remove("leave");
});

about_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
});

benefits_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
});

faq_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
});

contact_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
});

waitlist_click.addEventListener("click", function () {
  navigation_bar.classList.remove("active");
  menus_btn.classList.remove("leave");
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

    if (progressBarWidth >= 92.1) {
      header_bar.classList.add("inactive");
    } else {
      header_bar.classList.remove("inactive");
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

document.querySelector("#show-sign").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});
document.querySelector("#show-log").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});
document.querySelector("#show-log-in").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});
document.querySelector("#show-sign-in").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});
document.querySelector("#show-signIn").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});
document.querySelector("#show-logIn").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".main-body").classList.add("active");
  document.querySelector(".header-bar").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("active");
  document.querySelector(".main-body").classList.remove("active");
  document.querySelector(".header-bar").classList.remove("active");
});


