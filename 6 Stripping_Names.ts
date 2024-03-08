//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// Store a person's name with whitespace characters at the beginning and end.
let Person_name: string = "\n\tParveen kousar\n\t";



// Print the name, including whitespace characters, to display the original formatting.
console.log(Person_name);

// Use the trim() method to remove whitespace characters from the beginning and end of the name.
let Stripping_name: string = Person_name.trim();


// Print the name after stripping the white spaces.

console.log(Stripping_name);

