let student = {
    name: "Abel",
    age: 21,
    department: "Software Engineering",
    university: "Jimma University",

    introduce: function() {
        console.log("My name is " + this.name);
    }
};

console.log(student);

console.log(student.name);
console.log(student["age"]);

student.age = 22;

student.email = "abel@gmail.com";

console.log(student);

student.introduce();

for (let key in student) {
    console.log(key + ": " + student[key]);
}

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));

delete student.email;

console.log(student);