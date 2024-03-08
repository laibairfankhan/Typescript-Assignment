//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// Store the person's name in a variable.


let person_name = "iRfan";


// Print the name in lowercase using toLocaleLowerCase().

console.log(person_name.toLocaleLowerCase());


// Print the name in uppercase using toLocaleUpperCase().


console.log(person_name.toLocaleUpperCase());



// Print the name in titlecase (capitalize the first letter) using charAt and toLocaleLowerCase():

console.log(person_name.charAt(0).toLocaleUpperCase()+ person_name.slice(1).toLocaleLowerCase());





