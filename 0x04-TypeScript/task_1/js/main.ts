// build a Teacher interface as per specifications
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [propName: string]: any;
}
