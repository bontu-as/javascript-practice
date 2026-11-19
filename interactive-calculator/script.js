
function calculate() {

    // Get input values
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    // Check empty inputs
    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }

    // Check operator
    if (operator === "") {
        document.getElementById("result").innerHTML =
            "Please select an operator.";
        return;
    }

    // Perform calculation
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

    // Display result
    document.getElementById("result").innerHTML =
        "Result: " + result;
}


// Clear calculator
function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";

    document.getElementById("result").innerHTML =
        "Result:";
}
