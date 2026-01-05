const monthlyBtn = document.getElementById("monthly-btn");
const yearlyBtn = document.getElementById("yearly-btn");
const pointer = document.querySelector(".selection-pointer");

// save 2 months flag
const saveTwoMonthsFlag = document.querySelectorAll(".main-container > div > .plan-head > .save-two-months-flag");
// pricing plans
const basicPlan = document.querySelector(".main-container .basic-plan .plan-head .price");
const basicPlanPrice = basicPlan.querySelector("h1");

const plusPlan = document.querySelector(".main-container .plus-plan .plan-head .price");
const plusPlanPrice = plusPlan.querySelector("h1");

const enterprisePlan = document.querySelector(".main-container .enterprise-plan .plan-head .price");
const enterprisePlanPrice = enterprisePlan.querySelector("h1");

const plansTitles = document.querySelectorAll(".main-container > div .plan-head .price p");

let isMonthlySet = !pointer.classList.contains("yearly-active");


monthlyBtn.addEventListener("click", () => {
    if (isMonthlySet) return;
    isMonthlySet = true;
    pointer.classList.remove("yearly-active");


    // change DOM
    basicPlanPrice.textContent = "$9";
    plusPlanPrice.textContent = "$19";
    enterprisePlanPrice.textContent = "$49";

    // update title
    plansTitles.forEach(title => title.innerHTML = "per User<br>billed monthly");

    // hide save 2 months flag
    saveTwoMonthsFlag.forEach(flag => flag.style.display = "none");
})
yearlyBtn.addEventListener("click", () => {
    if (!isMonthlySet) return;
    isMonthlySet = false;
    pointer.classList.add("yearly-active");
    
    // change DOM
    basicPlanPrice.textContent = "$90";
    plusPlanPrice.textContent = "$190";
    enterprisePlanPrice.textContent = "$490";
    
    // update title
    plansTitles.forEach(title => title.innerHTML = "per User<br>billed yearly");

    // hide save 2 months flag
    saveTwoMonthsFlag.forEach(flag => flag.style.display = "block");
})