"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Make a array Guest list:
const Guest_list = [` Imran`, ` Adnan`, ` Salman`, ` Noman`];
for (let i = 0; i < Guest_list.length; i++) {
    // Print The Message Invited dinner:
    console.log(`Dear ${Guest_list[i]},\n\n you are invited for a dinner tommorrow.\n\n\nThank you\n\n\n`);
}
