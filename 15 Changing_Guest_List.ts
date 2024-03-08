//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list


// Initial Guest list  invited to dinner.

const Guest_list: string[] = [`Imran`,` Adnan`,` Salman`,` Noman`];

// Print the first set of invitation messages.

for (let i=0; i<Guest_list.length; i++){

 // Print the first set of dinner invitations.

console.log(`Dear ${Guest_list[i]}, \n\nyou are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);
}

// Define the guest who can't make it and the new guest to be invited.

const not_coming: string = ` Imran`;
const new_guest: string = ` Mahad`;

// Replace the guest who can't make it with the new guest.

Guest_list[0] = new_guest;


// Send out new invitations to the updated guest list.

for (let i=0; i<Guest_list.length; i++){

console.log(`Dear ${Guest_list[i]}, \n\nyou are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);
}

// Print a message stating the name of the guest who can't make it.

console.log(`Mr.${not_coming},is not coming for a dinner tommorrow.`);
