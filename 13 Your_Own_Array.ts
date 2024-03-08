//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 
// Create a list of favorite modes of transportation.


 const Favorite_transportation: string[] = [` Baik`,` Car`,` Plane`,` Bus`];


 // Loop through each transportation mode to express a desire for ownership.


 for(let i=0; i<Favorite_transportation.length; i++){

 //Expressing the wish to own each type of transportation.
 

console.log(`I would like to own a` + Favorite_transportation[i] );

 }
