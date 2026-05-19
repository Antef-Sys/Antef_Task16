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
    },

    {
        name: "Rohan Patel",
        marks: "70%",
        class: "12th",
        address: "Mumbai"
    },

    {
        name: "Priya Singh",
        marks: "95%",
        class: "8th",
        address: "Bangalore"
    },

    {
        name: "Ankit Gupta",
        marks: "60%",
        class: "9th",
        address: "Kolkata"
    },

    {
        name: "Neha Verma",
        marks: "80%",
        class: "11th",
        address: "Chennai"
    },

    {
        name: "Aman Yadav",
        marks: "72%",
        class: "7th",
        address: "Lucknow"
    },

    {
        name: "Pooja Mehta",
        marks: "91%",
        class: "12th",
        address: "Pune"
    },

    {
        name: "Rahul Kumar",
        marks: "66%",
        class: "6th",
        address: "Patna"
    },

    {
        name: "Sneha Joshi",
        marks: "88%",
        class: "9th",
        address: "Jaipur"
    },

    {
        name: "Karan Malhotra",
        marks: "74%",
        class: "10th",
        address: "Chandigarh"
    },

    {
        name: "Simran Kaur",
        marks: "82%",
        class: "11th",
        address: "Amritsar"
    },

    {
        name: "Arjun Nair",
        marks: "77%",
        class: "8th",
        address: "Kerala"
    },

    {
        name: "Meera Iyer",
        marks: "93%",
        class: "12th",
        address: "Hyderabad"
    },

    {
        name: "Vikram Singh",
        marks: "58%",
        class: "5th",
        address: "Bhopal"
    },

    {
        name: "Isha Roy",
        marks: "86%",
        class: "10th",
        address: "Kolkata"
    },

    {
        name: "Dev Sharma",
        marks: "79%",
        class: "7th",
        address: "Noida"
    },

    {
        name: "Nikita Jain",
        marks: "90%",
        class: "11th",
        address: "Indore"
    },

    {
        name: "Harsh Verma",
        marks: "68%",
        class: "6th",
        address: "Kanpur"
    },

    {
        name: "Tanvi Desai",
        marks: "96%",
        class: "12th",
        address: "Ahmedabad"
    }

];


// ================= SELECT ELEMENTS =================

const studentContainer = document.getElementById("studentContainer");

const searchInput = document.getElementById("search-input");


// ================= DISPLAY FUNCTION =================

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


// ================= INITIAL DISPLAY =================

displayStudents(students);


// ================= SEARCH FUNCTION =================

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter((student) => {

        return student.name.toLowerCase().includes(searchValue);

    });

    displayStudents(filteredStudents);

});