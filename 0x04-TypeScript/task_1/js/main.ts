// build a Teacher interface as per specifications
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [propName: string]: any;
}

// interface named Directors that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// a function printTeacher (usage: printTeacher("John", "Doe") -> J. Doe)
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

