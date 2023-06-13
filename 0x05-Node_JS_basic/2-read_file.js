const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8').trim().split('\n').slice(1);
    const studentsByField = {};

    for (const row of data) {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = row.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    console.log(`Number of students: ${data.length}`);

    for (const field in studentsByField) {
      if (field) {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
