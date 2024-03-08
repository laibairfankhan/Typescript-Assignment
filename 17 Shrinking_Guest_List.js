"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
const Guest_list = [` Imran `, ` Adnan `, ` Salman `, ` Noman `];
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} \n\nyou are invited for a dinner tomorrow.\n\n\n Thank you.\n\n\n`);
}
const not_coming = `Imran`;
const new_guest = `Mahad`;
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} \n\n you are invited for a dinner tomorrow.\n\n\nThank you.\n\n\n`);
}
console.log(`Mr ${not_coming},is not coming for a dinner tomorrow.`);
Guest_list.unshift(` kamran `);
Guest_list.splice(Guest_list.length / 2, 2, ` Umair `);
Guest_list.push(` Humaiyun `);
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} \n\nyou are invited for a dinner tomorrow.\n\n\nThank you.\n\n\n`);
}
console.log(`we have found a bigger dinner table so we invited more guest.`);
console.log(`\n\nunfortunataly we have out of space , so have a space for two guest only\n\n`);
while (Guest_list.length > 2) {
    const Remove_list = Guest_list.pop();
    console.log(`Sorry, Dear ${Remove_list}, you are not invited for a dinner.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]},\n\n you all are still invited for a dinner tomorrow.\n\n\nThank you\n\n\n`);
}
Guest_list.splice(0, 2);
console.log(Guest_list);
