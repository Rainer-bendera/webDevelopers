const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const students = document.querySelector(".students");
const nameInput = container['name'];
const ageInput = container['age'];
const rollInput = container['roll'];



const student =JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) =>{
    student.push({
        name: name,
        age: age,
        roll: roll,
    })

    localStorage.setItem("students", JSON.stringify(student));
    return {name, age, roll}
};

const createStudentElement = ({name, age, roll}) =>{
    const studentDiv = document.createElement("div");
    const studentName = document.createElement('h2')
    const studentAge = document.createElement('p')
    const studentRoll = document.createElement('p')

    studentName.innerText = "Student name: " + name;
    studentAge.innerText ="Student age: "+ age;
    studentRoll.innerText ="Student roll: "+ roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    students.appendChild(studentDiv);
    students.style.display = student.length === 0 ? "none" : "flex"
};
    students.style.display = student.length === 0 ? "none" : "flex"


student.forEach(createStudentElement);

container.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent)

    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";

};



