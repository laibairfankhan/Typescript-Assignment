//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//Define an interface to represent the structure of a language course
interface languageCoure{

    CourseName: string;
    Location: string;
    Institute: string;
    StudentInOneClass: number;
}

//Create an object representing details about an English language course
const languageCoure = {
    courseName: `English language`,
    location: `North Karachi`,
    Institute: `Sir Sham's Anglophile English Language Centre`,
    StudentInOneClass: `80`,

}
//Print the details of the language course object.
console.log(languageCoure);