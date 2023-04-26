// DirectorInterface interface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
export class Director implements DirectorInterface {
  workFromHome = (): string => {
    const message = "Working from home";
    console.log(message);
    return message;
  };

  getCoffeeBreak = (): string => {
    const message = "Getting a coffee break";
    console.log(message);
    return message;
  };

  workDirectorTasks = (): string => {
    const message = "Getting to director tasks";
    console.log(message);
    return message;
  };
}

// Create a class Teacher that will implement TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

// Create a function createEmployee with the required specifications

export function createEmployee(salary: number | string): Teacher | Director {
  return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
}

// Creating functions specific to employees
export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
  const tasks = isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
  console.log(tasks);
  return tasks;
};

/* a String literal type named Subjects allowing a variable to have the value 
Math or History only */

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  switch (todayClass) {
    case 'Math':
      return 'Teaching Math';
    case 'History':
      return 'Teaching History';
    default:
      throw new Error('Invalid subject');
  }
};
