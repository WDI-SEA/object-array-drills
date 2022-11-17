////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////
console.log("PART 1")
const album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
}  
// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.
let labelName = album1.albumDetails.label;
console.log("1. " + labelName)

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
album1.title = "Talking Heads: 77"
//can also use concatentation to add to the string album1.title = album1.title + ": 77"
console.log(album1.title)

const album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
}  

const album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: "August 3, 1979",
    label:    "Sire",
    formats:  ["Cassette"]
  }
}  


// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats
// Check out the Array.push method!

console.log("3.1 ", album2.albumDetails.formats[0])
album3.albumDetails.formats.push(album2.albumDetails.formats[0])
console.log("3.2 ",album3.albumDetails.formats)

// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!
album3.albumDetails.released = new Date("August 3, 1979") //hardcoded: adding new information
album3.albumDetails.released = new Date(album3.albumDetails.released) //dynamic (inside project information)
console.log("4. ", album3.albumDetails.released)


const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
}  

// 5. Add the label "Sire" to album4's details
album4.albumDetails.label = "Sire"
console.log("5. ", album4.albumDetails)

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}  

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
album5.albumDetails.formats = ["CD", "Cassette", "LP"]
console.log("6. ", album5.albumDetails)

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!
//You have to set it equal to itself for the change to take effect

album6["albumDetails"]["labels"][1] = album6["albumDetails"]["labels"][1].toUpperCase()
console.log("7. ", album6.albumDetails.labels)


const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
}  

// 8. Convert album7's 'labels' property from the string value
   // "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!
//You can also do itanother way:
album7.albumDetails.labels = album7.albumDetails.labels.split(', ')
// let labels = album7.albumDetails.labels.split(', ') 
// album7.albumDetails.labels = labels;
console.log("8. ", album7.albumDetails.labels)


/////////////////////////////////////////////////////
// Part 2: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////
console.log('\nPart 2') //the \n creates a space in the console.log

const album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    labels:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8,
]  

// 1. Create an object literal called `band`.

const band = {
  name:"Talking Heads",
  
}

band.members = ["David Byrne"]
band.albums = talkingHeadsAlbums
band.members.push("Tiny Weymouth", "Chris Franz", "Jerry Harrison") //can only use push with ARRAYS - not objects
console.log(band)


// // 2. Give it the property `name` and set it to "Talking Heads"

// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.

// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////
console.log("\nPart 3")
// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.

if(talkingHeadsAlbums.length > 6) {
  //this is if they're prolific
  console.log("Talking Heads were a prolific band")
} else {
  //this is if they're not
  console.log("Talking Heads didn't have much output.")
}

// 2. Write a conditional to check if the number of albums in
//    talkingHeadsAlbums is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
// //    the number of albums.

if(talkingHeadsAlbums.length%2 === 0) {
  console.log(`2. The number ${talkingHeadsAlbums.length} is even`)
} else {
  console.log(`2. The number ${talkingHeadsAlbums.length} is 0dd`)
}

// 3. Write conditionals to check if the number of albums in
//    talkingHeadsAlbums is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
let numAlbums = 7

//you have to put the most specific conditionals at the top of the conditional statement (checking if it's divisible by 2 and 3 BEFORE you check for 2, 3 by themselves, otherwise it won't check the other conditional statements)
  if(numAlbums === 0) {
    console.log(`3. The number ${numAlbums} is not divisible by 2 or 3`)
  } else if (numAlbums%3 === 0 && talkingHeadsAlbums.length%2 == 0) {
    console.log(`3. The number ${numAlbums} is divisible by 2 and 3`)
  } else if (numAlbums%2 === 0) {
    console.log(`3. The number ${numAlbums} is divisible by 2`)
  } else if (numAlbums%3 === 0) {
    console.log(`3. The number ${numAlbums} is divisible by 3`)
  } else {
    console.log(`3. The number ${numAlbums} is not divisible by 2 or 3`)
  }


// // 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
// //    Make sure it always works!

// /////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album
let sireTally = 0;
for(let i =0; talkingHeadsAlbums.length > i; i++) {
  console.log(talkingHeadsAlbums[i].title)
  
  if(talkingHeadsAlbums[i].albumDetails.label == "Sire"){
    sireTally ++;
  } else if (talkingHeadsAlbums[i].albumDetails.labels.includes("Sire") == true) {
  sireTally ++;
}
}
console.log(sireTally)
// // 2. Create a variable called `sireTally`, and set it to the integer value 0.


// //    Then use a for-loop to go through all the Talking Heads albums,
// //    incrementing sireTally if the album was released under the "Sire" label.
// //
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!
