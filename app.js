//Function to get input number
let getNumber1 = () => document.getElementById("input-number1").value;
let getNumber2 = () => document.getElementById("input-number2").value;

//Function to check empty input
let checkEmptyInput = () => {
    if (!getNumber1() || !getNumber2()) {
        document.getElementById("result").setAttribute("style", "background-color: lightcoral");
        return true;
    } else {
        document.getElementById("result").setAttribute("style", "background-color: lightgreen");
        return false;
    }
};

//Function to get input numbers, button operation and eval operation
let evalOperation = event => eval(getNumber1() + event.target.innerText + getNumber2());

//Function to show result. If empty input show error, if not empty eval operation
let handleClickOperation = event => document.getElementById("result").innerText =
    (checkEmptyInput()) ? "Error. Falta número" : evalOperation(event);

//Function to reset values
let handleClickDelete = () => {
    document.getElementById("input-number1").value = "";
    document.getElementById("input-number2").value = "";
    document.getElementById("result").setAttribute("style", "background-color: ghostwhite");
    document.getElementById("result").innerText = "";
}

//Set event listeners for buttons
document.getElementById("button-add").addEventListener("click", handleClickOperation);
document.getElementById("button-sub").addEventListener("click", handleClickOperation);
document.getElementById("button-mul").addEventListener("click", handleClickOperation);
document.getElementById("button-div").addEventListener("click", handleClickOperation);
document.getElementById("button-del").addEventListener("click", handleClickDelete);