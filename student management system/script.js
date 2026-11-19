
// Get the form container
let formContainer = document.getElementById("formContainer");

// Create a form
let form = document.createElement("form");

// Create student name input
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter student name";
nameInput.className = "form-control mb-3";
nameInput.id = "studentName";

// Create student ID input
let idInput = document.createElement("input");
idInput.type = "text";
idInput.placeholder = "Enter student ID";
idInput.className = "form-control mb-3";
idInput.id = "studentId";

// Create department dropdown
let departmentInput = document.createElement("select");
departmentInput.className = "form-select mb-3";
departmentInput.id = "department";

let departments = [
    "Software Engineering",
    "Computer Science",
    "Information Technology",
    "Electrical Engineering",
    "Civil Engineering",
    "Business Administration"
];

let placeholderOption = document.createElement("option");
placeholderOption.value = "";
placeholderOption.textContent = "Select department";
placeholderOption.disabled = true;
placeholderOption.selected = true;
departmentInput.appendChild(placeholderOption);

departments.forEach(function(department) {
    let option = document.createElement("option");
    option.value = department;
    option.textContent = department;
    departmentInput.appendChild(option);
});

// Create submit button
let addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "Add Student";
addButton.className = "btn btn-primary";

// Add inputs and button to form
form.appendChild(nameInput);
form.appendChild(idInput);
form.appendChild(departmentInput);
form.appendChild(addButton);

// Add form to HTML
formContainer.appendChild(form);


// Student array
let students = [];


// Add student
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = nameInput.value.trim();
    let id = idInput.value.trim();
    let department = departmentInput.value.trim();

    if (name === "" || id === "" || department === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Check duplicate ID
    if (students.some(student => student.id === id)) {
        alert("Student ID already exists.");
        return;
    }

    let student = {
        name: name,
        id: id,
        department: department
    };

    students.push(student);

    displayStudents();

    form.reset();
});


// Display students
function displayStudents() {

    let output = "<table class='table table-bordered'>";
    
    output += `
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    `;

    students.forEach((student, index) => {

        output += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>
                    <button class="btn btn-danger btn-sm"
                    onclick="deleteStudent(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;
    });

    output += "</tbody></table>";

    document.getElementById("studentList").innerHTML = output;
}


// Delete student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}
