let students = [];
let editIndex = -1;

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (editIndex >= 0) {
        // Edit existing student
        students[editIndex] = { name, age, grade };
        editIndex = -1;
    } else {
        // Add new student
        students.push({ name, age, grade });
    }

    document.getElementById('studentForm').reset();
    displayStudents();
});

function displayStudents() {
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the table

    students.forEach((student, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.age;
        row.insertCell(2).innerText = student.grade;

        // Create edit and delete buttons
        const actionsCell = row.insertCell(3);
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = () => editStudent(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
}

function editStudent(index) {
    editIndex = index;
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
