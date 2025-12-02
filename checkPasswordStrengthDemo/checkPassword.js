const password = document.getElementById("password"); // password input
const showHideBtn = document.getElementById("show"); // show/hide button
const showHideIcon = showHideBtn.querySelector("i"); // show/hide icon
const constraintsElements = document.querySelectorAll(".constraints ul li")
password.addEventListener("input", () => {
    let successCounter = 0;
    // show / hide button to change
    showHideBtn.classList.toggle("show-btn", password.value !== "")
    // verification
    let constraints = [password.value.length > 8,
        /[A-Z]/.test(password.value),
        /[a-z]/.test(password.value),
        /[0-9]/.test(password.value),
        /[!@#$%^&*]/.test(password.value)
    ];
    constraints.forEach((constraint, i) => {
        if (constraint){
            successCounter++ // count for progress bar
            constraintsElements[i].style.color = "rgb(0, 200, 0)" // checked
            constraintsElements[i].querySelector("i").className = "fa-solid fa-check" // change icon
        }
        else{
            constraintsElements[i].style.color = "red" // not yet checked
            constraintsElements[i].querySelector("i").className = "fa-solid fa-info" // change color
        }
    })
    // update progress bar
    const progressBar = document.querySelector(".progress span");
    switch (successCounter){
        case 0:                  
            progressBar.style.width = "0%";
            break;
        case 1:
            progressBar.style.width = "20%";
            progressBar.style.backgroundColor = "red";
            break;
        case 2:
            progressBar.style.width = "40%";
            progressBar.style.backgroundColor = "rgb(255, 64, 0)";
            break;
        case 3:
            progressBar.style.width = "60%";
            progressBar.style.backgroundColor = "rgb(255, 145, 0)";
            break;
        case 4:
            progressBar.style.width = "80%";
            progressBar.style.backgroundColor = "rgb(255, 217, 0)";
            break;
        case 5:
            progressBar.style.width = "100%";
            progressBar.style.backgroundColor = "rgb(0, 200, 0)";
            break;
    }
})

// change input type logic
showHideBtn.addEventListener("click", () => {
    // get input state
    const isPassword = password.type === "password";
    // change type
    password.type =  isPassword ? "text" : "password";
    // change icon
    showHideIcon.className = isPassword ? "hide-icon fa-regular fa-eye-slash" : "show-icon fa-regular fa-eye"
});