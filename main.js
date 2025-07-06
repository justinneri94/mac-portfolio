const windowEl = document.getElementById("main-window");
const titleBar = windowEl.querySelector(".title-bar");

let isDragging = false;
let offsetX, offsetY;

titleBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    windowEl.style.left = e.clientX - offsetX + "px";
    windowEl.style.top = e.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
