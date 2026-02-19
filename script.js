const buttons = document.querySelectorAll("button[data-tab]");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
button.addEventListener("click", () => {

tabs.forEach(tab => tab.classList.remove("active"));
document.getElementById(button.dataset.tab).classList.add("active");

buttons.forEach(btn => btn.classList.remove("active-btn"));
button.classList.add("active-btn");

});
});