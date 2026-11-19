
function calculate() {


    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }

    
    if (operator === "") {
        document.getElementById("result").innerHTML =
            "Please select an operator.";
        return;
    }

    
    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                document.getElementById("result").innerHTML =
                    "Error: Cannot divide by zero.";
                return;
            }

            result = num1 / num2;
            break;

        default:
            result = "Invalid operator";
    }

   
    document.getElementById("result").innerHTML =
        "Result: " + result;
}



function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";

    document.getElementById("result").innerHTML =
        "Result:";
}
