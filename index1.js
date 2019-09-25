const panels = document.querySelectorAll(".panel");
let oneOpen = false;
function toggleOpen() {
  if (oneOpen) {
    let closePanel = document.querySelector(".open");
    closePanel.classList.toggle("open");
    oneOpen = false;
  } else {
    console.log("Hello");
    this.classList.toggle("open");
    oneOpen = true;
  }
}
// ansdjksa
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
