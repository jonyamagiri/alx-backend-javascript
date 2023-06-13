const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    if (data) {
      const lines = data.toString('utf-8').trim().split('\n');
      const fieldName = lines[0].split(',');
      const studentProperty = fieldName.slice(0, -1);
      const studentGroups = {};

      for (const item of lines.slice(1)) {
        const studentRecord = item.split(',');
        const studentValues = studentRecord.slice(0, -1);
        const field = studentRecord[studentRecord.length - 1];
        // eslint-disable-next-line no-prototype-builtins
        if (!studentGroups.hasOwnProperty(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentProperty.map((propertyName, idx) => [
          propertyName,
          studentValues[idx],
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(studentGroups).flat().length;
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
