// this is themeSwitch.js
// light/dark buttons
const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");
// rootElement
const page = document.documentElement;
// plus plan with gradient image
const cardHead = document.querySelector(".plus-plan .plan-head");

// switching themes logic
let isDark = darkBtn.classList.contains("active");
lightBtn.addEventListener("click", () => {
    if (!isDark) return // in case the theme is already light
    // otherwise (dark)
    page.classList.remove("dark");
    // update theme state
    isDark = false;
    // update plan with gradient image
    cardHead.classList.remove("dark-background");
    // add active state
    darkBtn.classList.remove("active");
    lightBtn.classList.add("active");
});
darkBtn.addEventListener("click", () => {
    if (isDark) return // in case the theme is already dark
    // otherwise (light)
    page.classList.add("dark");
    // update theme state
    isDark = true;
    // update plan with gradient image
    cardHead.classList.add("dark-background");
    // add active state
    lightBtn.classList.remove("active");
    darkBtn.classList.add("active");
});