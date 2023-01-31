new WOW().init();
// scroll bar
let scroller = document.querySelector(".scrollbar");
let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / heigth) * 100}%`
});

// scroll to top
let toTop = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  let i = 300;
  if (window.scrollY > i) {
    toTop.style.display = "block";
  } else (toTop.style.display = "none");
});
// progress{
let section = document.querySelector(".skills");
let progress = document.querySelectorAll(".skills .skill span");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    progress.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
}
// type writer
let myName = `Mohamed Adel`
let i=0
window.onload = function () {
  let typeWriter = setInterval(function () {
    document.getElementById("type").textContent += myName[i];
    i += 1;
    if (i > myName.length - 1) {
      clearInterval(typeWriter);
    }
  },100)
}
console.log(document.getElementById("type").innerText)