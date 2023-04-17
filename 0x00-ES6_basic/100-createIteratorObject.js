export default function createIteratorObject(report) {
  // create an empty array to store all the employees
  const personnel = [];

  // iterate over the values of the (allEmployees) property in report object
  for (const employees of Object.values(report.allEmployees)) {
    // use spread operator to add each employee to (personnel) array
    personnel.push(...employees);
  }

  // return the (personnel) array with all employees
  return personnel;
}
