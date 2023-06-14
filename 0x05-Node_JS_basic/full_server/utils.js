const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n');
      const headers = students.shift().split(',');
      const studentsByField = {};
      const studentsObjs = [];

      students.forEach((student) => {
        if (student) {
          const studentInfo = student.split(',');
          const studentObj = {};

          headers.forEach((header, idx) => {
            studentObj[header] = studentInfo[idx];
            if (header === 'field') {
              if (studentsByField[studentInfo[idx]]) {
                studentsByField[studentInfo[idx]].push(studentObj.firstname);
              } else {
                studentsByField[studentInfo[idx]] = [studentObj.firstname];
              }
            }
          });
          studentsObjs.push(studentObj);
        }
      });

      const totalStudents = `Number of students: ${studentsObjs.length}`;
      let response = `${totalStudents}\n`;
      console.log(totalStudents);

      for (const groupStudent in studentsByField) {
        // eslint-disable-next-line no-prototype-builtins
        if (studentsByField.hasOwnProperty(groupStudent)) {
          const listStudents = studentsByField[groupStudent];
          const finalStudentGrp = `Number of students in ${groupStudent}: ${listStudents.length}. List: ${listStudents.join(', ')}`;
          response += `${finalStudentGrp}\n`;
          console.log(finalStudentGrp);
        }
      }

      resolve(response);
    });
  });
};
