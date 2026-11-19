

function calculateGrade() {

    let name = document.getElementById("studentName").value;
    let mark = Number(document.getElementById("mark").value);

    let grade;
    let status;

    if (name.trim() === "" || document.getElementById("mark").value === "") {
        document.getElementById("result").innerHTML =
            "Please enter student name and mark.";
        return;
    }

    if (mark < 0 || mark > 100) {
        document.getElementById("result").innerHTML =
            "Enter a mark between 0 and 100.";
        return;
    }

    if (mark >= 90) {
        grade = "A";
    }
    else if (mark >= 80) {
        grade = "B";
    }
    else if (mark >= 70) {
        grade = "C";
    }
    else if (mark >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    status = mark >= 50 ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        name + " received grade " + grade +
        ". Status: " + status + ".";
}

