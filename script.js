let str = "programmer";
console.log(str.substring(0, 5));
const secondEL = [...document.querySelectorAll(".second")];
// secondEL.forEach((el) => {
//   el.style.transform = `translateX(1500px)`;
// });
function backer() {
  secondEL.forEach((el, index) => {
    el.style.transform = `translateX(0px)`;
    el.style.transition = `transform ${0.5 * (index + 1)}s ease`;
  });
}
backer();
window.addEventListener("load", function () {
  backer();
});
