//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Initial Guest list  invited to dinner.

const Guest_list: string[] = [` Imran `,` Adnan `,` Salman `,` Noman `];

// Print the first set of invitation messages.
for(let i=0; i<Guest_list.length; i++){

 // Print the first set of dinner invitations.

console.log(`Dear ${Guest_list[i]} \n\nyou are invited for a dinner tomorrow.\n\n\n Thank you.\n\n\n`)
}
// Define the guest who can't make it and the new guest to be invited.

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
