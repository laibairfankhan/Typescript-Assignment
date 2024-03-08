//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Create an array to store friends' names.

const Friends_Name: string[] = [` Arzoo `,` Liza `, ` Naziya`,` Esha `];


// Set a common invitation message for the birthday party.

const message: string = `You are invited my Birthday Party`;


// Go through each friend and print a personalized invitation.

for (let i=0; i<Friends_Name.length; i++)
{

    // Print a message inviting each friend by adding their name to the common message.

console.log(message + Friends_Name[i]);

}