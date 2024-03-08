"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
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
const PlacesToVisit = [`Makkah mukarrama`, `london`, `New york`, `paris`, `singapore`];
// Print the original order of the list.
console.log("Original order:", PlacesToVisit);
console.log(`Alphabetical order:`, [PlacesToVisit].sort());
console.log(`Original order after sorting:`, PlacesToVisit);
console.log(`Reverse Alphabetical order:`, [...PlacesToVisit].sort().reverse());
console.log(`Original order after Reverse sorting:`, PlacesToVisit);
PlacesToVisit.reverse();
console.log(`Reverse order:`, PlacesToVisit);
PlacesToVisit.reverse();
console.log(`Back to Original order:`, PlacesToVisit);
PlacesToVisit.reverse();
console.log(`sorted in Alphabetical order:`, PlacesToVisit);
PlacesToVisit.sort((a, b) => b.localeCompare(a));
console.log(`sorted in Reverse Aphabetical order:`, PlacesToVisit);
