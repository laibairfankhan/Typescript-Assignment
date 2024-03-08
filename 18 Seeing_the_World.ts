//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

import { reverse } from "dns";

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Array of places to visit.
 const PlacesToVisit: string[] = [`Makkah mukarrama`,`london`,`New york`,`paris`,`singapore`];

 
// Print the original order of the list.
 console.log("Original order:",PlacesToVisit );

 // Print array in alphabetical order without modifying the original list
 console.log(`Alphabetical order:`, [PlacesToVisit].sort());

 
// Confirm the original order is unchanged.
 console.log(`Original order after sorting:` , PlacesToVisit);

 
// Print array in reverse alphabetical order without changing the original list.
 console.log(`Reverse Alphabetical order:`, [...PlacesToVisit].sort().reverse());

 // Confirm the original order is unchanged.
 console.log(`Original order after Reverse sorting:` , PlacesToVisit);


// Reverse the order of the list.
 PlacesToVisit.reverse();
 console.log(`Reverse order:` , PlacesToVisit);

// Reverse the order again to get back to the original order.
 PlacesToVisit.reverse();
 console.log(`Back to Original order:`, PlacesToVisit);
 
// Sort array in alphabetical order and print to show the change.
PlacesToVisit.reverse();
 console.log(`sorted in Alphabetical order:`, PlacesToVisit);

 // Sort array in reverse alphabetical order and print to show the change.
 PlacesToVisit.sort((a,b) => b.localeCompare(a));
 console.log(`sorted in Reverse Aphabetical order:`, PlacesToVisit);
