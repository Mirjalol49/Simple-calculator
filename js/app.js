//! GET ELEMENTS FROM DOM
let elForm = document.querySelector(".js-form");
let elInputOne = document.querySelector(".js-inputone");
let elSelect = document.querySelector(".js-select");
let elInputSecond = document.querySelector(".js-inputsecond");
let elResult = document.querySelector(".js-result");
let elBtn = document.querySelector(".js-btn");
let elRefresh = document.querySelector(".js-refresh");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    elBtn.classList.add("again")
    elRefresh.classList.add("refresh")

    let inputOneValue = Number(elInputOne.value.trim());
    let inputSecondValue = Number(elInputSecond.value.trim());

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




})

function refreshPage() {
    window.location.reload();
}