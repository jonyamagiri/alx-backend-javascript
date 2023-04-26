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
