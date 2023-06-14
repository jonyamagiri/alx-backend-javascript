import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response, db) {
    readDatabase(db)
      .then((data) => {
        const msg = 'This is the list of our students\n';
        const newData = msg + data;
        response.status(200).send(newData.slice(0, -1));
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response, db) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(db)
        .then((data) => {
          const list = data.split('\n');
          const [field1, field2] = list.slice(1, 3);

          const students = major === 'CS' ? field1 : field2;
          const studentsList = students.split('. ');

          response.status(200).send(`${studentsList[1]}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}
