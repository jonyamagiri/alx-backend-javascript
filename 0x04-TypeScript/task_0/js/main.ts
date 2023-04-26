/* an interface named Student that accepts the following elements: 
firstName(string), lastName(string), age(number), and location(string) */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students using interface Student
const student1: Student = {
  firstName: "Mwai",
  lastName: "Kibaki",
  age: 25,
  location: "Mweiga Nyeri"
};

const student2: Student = {
  firstName: "Daniel",
  lastName: "Moi",
  age: 32,
  location: "Kapedo Baringo"
};

// create an array named studentsList containing the two variables 
const studentsList: Student[] = [student1, student2];

/*  Using Vanilla Javascript, render a table and for each elements in the array, 
append a new row to the table */

const table = document.createElement('table');

const headerRow = table.createTHead().insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.innerText = 'First Name';
const headerCell2 = headerRow.insertCell();
headerCell2.innerText = 'Location';

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.innerText = student.firstName;
  const cell2 = row.insertCell();
  cell2.innerText = student.location;
});

document.body.appendChild(table);
