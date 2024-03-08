//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


// Initial list of invited friends.
const Guest_List: string[] = [` Imran `, ` Adnan `,` Salman `, ` Noman `];

//for(let i=0; i<Guest_List.length; i++){

//console.log(`Dear ${Guest_List[i]}\n\nyou are invited for a dinner tomorrow.\n\n\nThank you~`);
//}

// Get the number of friends invited to dinner.
const lengthGuests: number = Guest_List.length;

//Print a message telling us how many friends are invited to dinner.
console.log(`we are invited total ${lengthGuests} guests`);