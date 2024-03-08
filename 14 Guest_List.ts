//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


 // Create a list of Guest list to invite to dinner.


const Guest_list: string[] = [` Imran`,` Adnan`,` Salman`,` Noman`];


// Loop through each guest and print a personalized dinner invitation.


for(let i=0; i<Guest_list.length; i++){


//Print a dinner invitation message to each guest in the list.


console.log(`Dear ${Guest_list[i]},\n\n you are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);

}


