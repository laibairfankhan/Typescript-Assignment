"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
