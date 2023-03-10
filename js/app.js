//! GET ELEMENTS FROM DOM
let elForm = document.querySelector(".js-form");
let elInputOne = document.querySelector(".js-inputone");
let elSelect = document.querySelector(".js-select");
let elInputSecond = document.querySelector(".js-inputsecond");
let elResult = document.querySelector(".js-result");
let elBtn = document.querySelector(".js-btn");
let elRefresh = document.querySelector(".js-refresh");

//! PREVENT FORM DEFAULT VERSION
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //! ADDING CLASS TO BTN TO CHANGE 
    elBtn.classList.add("again");
    elRefresh.classList.add("refresh");

    //! TURNING INPUT TYPE TO NUMBER AND TRIMMING SPACES
    let inputOneValue = Number(elInputOne.value.trim());
    let inputSecondValue = Number(elInputSecond.value.trim());

    //! GIVING A CONDITION TO CALCULATE
    if (elSelect.value === "+") {
        let result = inputOneValue + inputSecondValue;
        elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else if (elSelect.value === "-") {
        let result = inputOneValue - inputSecondValue;
        elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else if (elSelect.value === "*") {
        let result = inputOneValue * inputSecondValue;
        elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else if (elSelect.value === "/") {
        let result = inputOneValue / inputSecondValue;
        elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

});

//! THIS FUCNTION REFRESHES THE PAGE
function refreshPage() {
    window.location.reload();
};