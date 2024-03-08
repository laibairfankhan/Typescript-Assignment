
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”


// Create a Variable for the Famous Person:

const Famous_name: string = "Albert Einstien";

// Create a message for the Famous Person using template literals:


// Unicode escape sequences (\u201C and \u201D) represent opening and closing curly quotes for proper formatting:


const Message = (`${Famous_name} once said, \u201CA person who never made a mistake never tried anything new.\u201D`)


// Print the Famous Name along with the given Famous Line:


console.log(Message);
