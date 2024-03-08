"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
//start program from exercise 14:
//Guest_list:
const Guest_list = [`Imran`, ` Adnan`, ` Salman`, ` Noman`];
for (let i = 0; i < Guest_list.length; i++) {
    //print the message invited:
    console.log(`Dear ${Guest_list[i]}, \n\nyou are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);
}
//change the guest list:
const not_coming = ` Imran`;
const new_guest = ` Mahad`;
Guest_list[0] = new_guest;
//print the message new guest Mahad:
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]}, \n\nyou are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);
}
//print the message not coming guest Imran:
console.log(`Mr.${not_coming},is not coming for a dinner tommorrow.`);
