const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbFile = process.argv[2] || '';

// reads and processes the CSV file to generate the student report
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (dataPath === undefined || dataPath === null) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const finalResponse = [];
    const lines = data.trim().split('\n');
    const studentGroups = {};
    const fieldName = lines[0].split(',');
    const studentProperty = fieldName.slice(0, -1);

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
    finalResponse.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      finalResponse.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
    resolve(finalResponse.join('\n'));
  });
});

// defines route handlers
app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  countStudents(dbFile)
    .then((report) => {
      const responseInfo = ['This is the list of our students', report];
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseInfo.join('\n'));
    })
    .catch((err) => {
      const errorMessage = err instanceof Error ? err.message : err.toString();
      const responseInfo = ['This is the list of our students', errorMessage];
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseInfo.join('\n'));
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
