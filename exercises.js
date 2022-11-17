////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////

// const album1 = {
//   title: "Talking Heads",
//   albumDetails: {
//     released: new Date("September 16, 1977"),
//     label:    "Sire",
//     formats:  ["LP"]
//   }
// }  

// console.log(album1.albumDetails.label)

// const labelName = album1.albumDetails.label

// album1.title = 'Talking Heads: 77'

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.

// // 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

// const album2 = {
//   title: "More Songs About Buildings and Food",
//   albumDetails: {
//     released: new Date("July 14, 1978"),
//     label:    "Sire",
//     formats:  ["LP", "8-track"]
//   }
// }  

// const album3 = {
//   title: "Fear of Music",
//   albumDetails: {
//     released: "August 3, 1979",
//     label:    "Sire",
//     formats:  ["Cassette"]
//   }
// }  



// // 3. Access album2's formats array and use an array method to add "LP" to
// //    album3's formats
// // Check out the Array.push method!

// console.log(album2.albumDetails.formats[0])

// album3.albumDetails.formats.push('LP')

// console.log(album3.albumDetails.formats[0])

// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!

// const album4 = {
//   title: "Remain in Light",
//   albumDetails: {
//     released: new Date("October 8, 1980"),
//     formats: ["Cassette", "LP"]
//   }
// }  

// album3.albumDetails.released = 'October 8, 1980'

// console.log(album3.albumDetails.released)

// 5. Add the label "Sire" to album4's details

// const album5 = {
//   title: "Speaking in Tongues",
//   albumDetails: {
//     released: new Date("May 31, 1983"),
//     label:    "Sire"
//   }
// }  

// album4.albumDetails.label = 'Sire'

// console.log(album4.albumDetails.label)

// // 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"

// const album6 = {
//   title: "Little Creatures",
//   albumDetails: {
//     released: new Date("June 10, 1985"),
//     labels:   ["Sire", "emi"],
//     formats:  ["CD", "cassette", "LP"]
//   }
// }  
// album5.albumDetails.formats = ["CD", "cassette", "LP"]

// console.log(album5.albumDetails.formats)

// // 7. Make the label "emi" in album6 all uppercase
// // google how to make a string uppercase in js!

// const album7 = {
//   title: "True Stories",
//   albumDetails: {
//     released: new Date("October 7, 1986"),
//     labels:   "Sire, EMI",
//     formats:  ["CD", "cassette", "LP"]
//   }
// }  

// album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase()

// // 8. Convert album7's 'labels' property from the string value
// //    "Sire, EMI" into the array: ["Sire", "EMI"]
// // google js array split!

// album7.albumDetails.labels = album7.albumDetails.labels.split(",")

// console.log(album7.albumDetails.labels)

// /////////////////////////////////////////////////////
// // Part 2: More Tasks About Datatypes and Structures
// /////////////////////////////////////////////////////

// const album8 = {
//   title: "Naked",
//   albumDetails: {
//     released: new Date("March 15, 1988"),
//     labels:    ["Sire", "EMI"],
//     formats:  ["CD", "cassette", "LP"]
//   }
// }  

// const talkingHeadsAlbums = [
//   album1,
//   album2,
//   album3,
//   album4,
//   album5,
//   album6,
//   album7,
//   album8
// ]  

// // 1. Create an object literal called `band`.
// band: {
//   name: "Talking Heads"
//   members: ["David Byrne"]
//   albums: talkingHeadsAlbums
// }
// // // 2. Give it the property `name` and set it to "Talking Heads"

// // // 3. Give it the property `members` and set it to an array with a single
// // //    string, "David Byrne", in it.

// // // 4. Give it the property `albums` and set it to the array stored in the
// // //    variable talkingHeadsAlbums

// // // 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
// // //    array.

// band.members.push = ("Tiny Weymouth", "Chris Franz", "Jerry Harrison")

// ////////////////////////////////////////////////
// // Part 3: Conditional Logic
// ////////////////////////////////////////////////

// // 1. Write a conditional to console.log "Talking Heads were a prolific band"
// //    if the Talking Heads have 6 albums or more. Otherwise, console.log
// //    "Talking heads didn't have much output." Use the array of albums
// //    talkingHeadsAlbums above.
//IMPORTANT good idea to set up structure like this when writing these if/else statements so you just plug in the values.
// if (talkingHeadsAlbums.length > 5) {
//   //this is just like the labs we did earlier today we just need to plug in what values they gave us
//   console.log("Talking Heads were a prolific band")
// } else {
//   console.log("Talking heads didn't have much output.")
// }
// // 2. Write a conditional to check if the number of albums in
// //    talkingHeadsAlbums is odd or even, and then console.log
// //    "The number X is odd" or "The number X is even" with X being
// //    the number of albums.
//ask about this one, I think I did it right but maybe use / for divide?
// if (talkingHeadsAlbums.length % 2 === 0) {
//   console.log("The number X//${talkingHeadsAlbums.length} is even")
// } else {
//   console.log("The number X//${talkingHeadsAlbums.length} is odd")
// }

// // 3. Write conditionals to check if the number of albums in
// //    talkingHeadsAlbums is divisible by either 2 or 3, and then
// //    console.log one of:

//this one was hard af ask

// //    - "The number Y is divisible by 2",
// //    - "The number Y is divisible by 3",
// //    - "The number Y is divisible by 2 and 3", or
// //    - "The number Y is not divisible by 2 or 3",
// //
// //    with Y being the number of albums.

// let numAlbums = talkingHeadsAlbums.length

// if(numAlbums % 2 === 0) {
//   console.log('The number' ${numAlbums} 'is divisible by 2')
// } else if(numAlbums % 3 === 0) {
//   console.log('The number' ${numAlbums} 'is divisible by 3')
// } else if(numAlbums % 2 === 0 && numAlumbs % 3 === 0) {
//   console.log('The number' ${numAlbums} 'is divisible by 2 and 3')
// } else {
//   console.log('The number' ${numAlbums} 'is not divisible by 2 and 3')
//   //this else is basically a catch all so if your stuff doesn't meet any other requirements it will fall under else so keep that in mind, we don't need to set a conditional
// }

//IMPORTANT during class: always a good idea to set up the skeleton of the conditional first, just like the if/else stuff. Gives you a visual
// // 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
// //    Make sure it always works!

// /////////////////////////////////////////////////////
// // Part 4: For Loops
// /////////////////////////////////////////////////////

// // 1. Use a for loop to print out the name of each Talking Heads album

// // 2. Create a variable called `sireTally`, and set it to the integer value 0.
// //    Then use a for-loop to go through all the Talking Heads albums,
// //    incrementing sireTally if the album was released under the "Sire" label.
// //
//    // Warning: some albums have a property `.label`, which is a string, and some
//    // have `.labels`, which is an Array!

// for(let i = 0; i < talkingHeadsAlbums.length; i++) {
//   console.log(talkingHeadsAlbum[i].title)
// }

// let sireTally = 0
// for(let i = 0; i < talkingHeadsAlbum.length, i++) {
//   console.log('album', talkingHeadsAlbums[i].albumDetails)
//   if(talkingHeadsAlbums[i].albumDetails.label === 'Sire' ||
//     talkingHeadsAlbums[i].albumDetails.label.includes('Sire')) {
//     sireTally++
//     }
// }
//had a hard time even following along with the instructor, would like more practice with this
// console.log(sireTally)


//bonus notes: && = and if 
//remember all conidtionals need to go in cascading order because if a value hits a true statement first it'll stop regardless if things after it are true or not
//${} means interpalate 
// ? indicates a conditional
