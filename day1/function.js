let students = [];

function addStudent(name) {
  students.push(name);
}

function displayStudents() {
  students.forEach(function(name) {
    console.log(name);
  });
}

function searchStudent(name) {
  return students.includes(name);
}

function countStudents() {
  return students.length;
}

addStudent("Abel");
addStudent("Sara");
addStudent("Daniel");

displayStudents();

console.log(searchStudent("Sara"));

console.log("Total students:", countStudents());
