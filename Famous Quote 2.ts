//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Store the name of the Famous Person in a variable.

const Famous_person: string = "Quaid-e-Azam";


// Compose the message using template literals:

// Unicode escape sequences (\u201C and \u201D) represent opening and closing curly quotes for proper formatting:


const message = (`${Famous_person} said, \u201C do not believe in taking the right decision . I take a decision and make it right.\u201D`);


// Print the Compose Message:

console.log(message);