let courses = [
  "JavaScript",
  "Python",
  "Database",
  "Web Development",
  "Software Engineering"
];

console.log("Available courses:", courses);

courses.push("Artificial Intelligence");

console.log("After adding a course:", courses);

courses.splice(courses.indexOf("Database"), 1);

console.log("After removing Database:", courses);

console.log("Total courses:", courses.length);

console.log("Is Python available?", courses.includes("Python"));

