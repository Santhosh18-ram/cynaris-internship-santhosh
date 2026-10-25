
const students = [
  { name: "Arun", marks: 85, city: "Bengaluru" },
  { name: "Priya", marks: 45, city: "Mysuru" },
  { name: "Rahul", marks: 72, city: "Bengaluru" },
  { name: "Sneha", marks: 90, city: "Mangaluru" }
];


const greet = (name) => `Hello, ${name}!`;
console.log(greet("Students"));

const { name, marks } = students[0];
console.log(`${name} scored ${marks} marks`);

const [firstStudent, secondStudent] = students;
console.log(firstStudent.name, secondStudent.name);

const passedStudents = students.filter(student => student.marks >= 50);
console.log("Passed students:", passedStudents);

const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

const totalMarks = students.reduce((total, student) => {
  return total + student.marks;
}, 0);

const average = totalMarks / students.length;
console.log("Average marks:", average);

const studentList = document.getElementById("student-list");
const averageText = document.getElementById("average");

function displayStudents(studentData) {
  studentList.innerHTML = "";

  studentData.forEach(({ name, marks, city }) => {
    const item = document.createElement("li");
    item.textContent = `${name} - ${marks} marks - ${city}`;
    studentList.appendChild(item);
  });
}

displayStudents(students);
averageText.textContent = average.toFixed(2);

document.getElementById("show-all").addEventListener("click", () => {
  displayStudents(students);
});

document.getElementById("show-passed").addEventListener("click", () => {
  displayStudents(passedStudents);
});
