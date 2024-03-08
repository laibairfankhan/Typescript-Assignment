//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

// Initial Guest list  invited to dinner.

const Guest_list: string[] = [` Imran `,` Adnan `,` Salman `,` Noman `];


// Print the first set of invitation messages.

for(let i=0; i<Guest_list.length; i++){

 // Print the first set of dinner invitations.

console.log(`Dear ${Guest_list[i]} \n\nyou are invited for a dinner tomorrow.\n\n\n Thank you.\n\n\n`)
}
// Define the guest who can't make it and the new guest to be invited.\
const not_coming: string = `Imran`;
const new_guest: string = `Mahad`;

// Replace the guest who can't make it with the new guest.

Guest_list[0]  = new_guest; 

// Send out new invitations to the updated guest list.

for (let i=0; i<Guest_list.length; i++){

console.log(`Dear ${Guest_list[i]} \n\n you are invited for a dinner tomorrow.\n\n\nThank you.\n\n\n`);
}
// Print a message stating the name of the guest who can't make it.

console.log(`Mr ${not_coming},is not coming for a dinner tomorrow.`);

// Add one new guest to the beginning of the array.

Guest_list.unshift(` kamran `);

// Add one new guest to the middle of the array.

Guest_list.splice( Guest_list.length/2 , 2 ,` Umair `);

// Use append() to add one new guest to the end of the list.

Guest_list.push(` Humaiyun `);

// Send out invitations to the expanded guest list.

for (let i=0; i<Guest_list.length; i++){

console.log(`Dear ${Guest_list[i]} \n\nyou are invited for a dinner tomorrow.\n\n\nThank you.\n\n\n`)
}
// Inform everyone about finding a bigger dinner table.

console.log(`we have found a bigger dinner table so we invited more guest.`)

// Inform that there's space for only two guests.
console.log(`\n\nunfortunataly we have out of space , so have a space for two guest only\n\n`);

// Remove guests until only two names remain.

while(Guest_list.length>2){
    const Remove_list = Guest_list.pop();
    console.log(`Sorry, Dear ${Remove_list}, you are not invited for a dinner.`);
}
// Print invitations for the remaining two guests.

for (let i=0; i<Guest_list.length; i++){
console.log(`Dear ${Guest_list[i]},\n\n you all are still invited for a dinner tomorrow.\n\n\nThank you\n\n\n`);
}

// Remove the last two names from the list
Guest_list.splice(0,2);


// Remove the last two names from the list
console.log(Guest_list);
