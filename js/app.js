//! GET ELEMENTS FROM DOM
const elForm = document.querySelector("#js-form");
const elInputone = document.querySelector("#js-inputone");
const elSelect = document.querySelector("#js-select");
const elInputSecond = document.querySelector(".js-inputsecond");
const elResult = document.querySelector("#js-result");
const elBtn = document.querySelector("#js-btn");
const elRefresh = document.querySelector("#js-refresh");

//! PREVENT FORM DEFAULT VERSION
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //! ADDING CLASS TO BTN TO CHANGE 
    elBtn.classList.add("again");
    elRefresh.classList.add("refresh");

    //! TURNING INPUT TYPE TO NUMBER AND TRIMMING SPACES
    const inputOneValue = Number(elInputone.value.trim());
    const inputSecondValue = Number(elInputSecond.value.trim());
    let result;

    //! GIVING A CONDITION TO CALCULATE
    switch (elSelect.value) {
        case "+":
            result = inputOneValue + inputSecondValue;
            elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            break;
        case "-":
            result = inputOneValue - inputSecondValue;
            elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            break;
        case "*":
            result = inputOneValue * inputSecondValue;
            elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            break;
        case "/":
            result = inputOneValue / inputSecondValue;
            elResult.textContent = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            break;
    }
});

//! THIS FUNCTION REFRESHES THE PAGE
function refreshPage() {
    window.location.reload();
}