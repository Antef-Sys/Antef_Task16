🎓 Student Record Search System
https://antef-sys.github.io/Antef_Task16/

This project demonstrates dynamic rendering and searching of student records using JavaScript.

The application displays student details in card format and filters students in real-time using JavaScript map() and filter() methods.

📁 Project Structure

project-folder/
│── index.html
│── style.css
│── script.js
│── README.md

🚀 Features
1. Dynamic Student Cards
    Student data is stored in an array of objects
    Cards are generated dynamically using map()
    Displays:
        Name
        Marks
        Class
        Address
   
3. Real-Time Search
    Filters students while typing
    Uses JavaScript filter() function
    Search is case-insensitive
   
5. Responsive UI
    Responsive grid layout
    Modern card design
    Mobile-friendly interface
   
🧠 Code Overview
Student Array
const students = [
    {
        name: "Salman Ahmed",
        marks: "38%",
        class: "3rd",
        address: "India"
    },

    {
        name: "Riya Sharma",
        marks: "85%",
        class: "10th",
        address: "Delhi"
    }
];

Display Function Using map() 

function displayStudents(studentArray){

    const cards = studentArray.map((student) => {

        return `

            <div class="item">

                <h3>${student.name}</h3>

                <p><span>Marks:</span> ${student.marks}</p>

                <p><span>Class:</span> ${student.class}</p>

                <p><span>Address:</span> ${student.address}</p>

            </div>

        `;

    });

    studentContainer.innerHTML = cards.join("");

}

Search Function Using filter()

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter((student) => {

        return student.name
        .toLowerCase()
        .includes(searchValue);

    });

    displayStudents(filteredStudents);

});

🖥️ Output
    Displays all student cards dynamically
    Updates cards instantly while typing in search box
    Responsive layout for all screen sizes

▶️ How to Run
    Create four files:
        index.html
        style.css
        script.js
        README.md
    Paste the respective code into each file
    Open index.html in your browser
    Type in the search box to filter students dynamically
    
💡 Concepts Used
Arrays
Objects
DOM Manipulation
Functions
Event Listeners
Template Literals
map()
filter()
CSS Grid
Flexbox

📌 Author
    Antef Idrisi

⭐ Future Improvements
    Add student profile images
    Add dark mode
    Add sorting functionality
    Add edit/delete functionality
    Connect with database/backend
