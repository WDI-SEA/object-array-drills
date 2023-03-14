////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////

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

let album1RecordLabel = album1.albumDetails.label
console.log(album1RecordLabel)

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
// let talkingHeads = album1.title
// console.log(`${talkingHeads}: 77`)
// return`${talkingHeads}: 77`



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
const album2FormatsLp = album2.albumDetails.formats[0]
console.log(`${album2FormatsLp}`)
let formatsAlbum3 = album3.albumDetails.formats.push(album2FormatsLp)
console.log(`${formatsAlbum3}`)


// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!
let releasedDate = album3.albumDetails.released
releasedDate = new Date("August 3, 1979")
console.log(typeof releasedDate)

const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
}  

// 5. Add the label "Sire" to album4's details
album4.label = "Sire"
console.log(album4.label)

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}  

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
album5.formats = ["CD", "Cassette", "LP"]
console.log(album5.formats)

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
//*******Pivot 
// let change = album6.albumDetails.labels[1]
// // let update = change.toUpperCase(s)
// console.log(album6.albumDetails.labels[1].toLocaleUpperCase)
let labelEmi = album6.albumDetails.labels[1].toLocaleUpperCase();
console.log(labelEmi)

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
}  

// 8. Convert album7's 'labels' property from the string value
//    "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!
let labelsArray = album7.albumDetails.labels.split();
console.log(labelsArray)


/////////////////////////////////////////////////////
// Part 2: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

const album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    labels:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
}  

let y = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
]  

// 1. Create an object literal called `band`.
let band = {}

// 2. Give it the property `name` and set it to "Talking Heads"
band.name = "Talking Heads"
console.log(band.name)

// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.
band.members = ["David Byrne"]
// console.log(band)

// 4. Give it the property `albums` and set it to the array stored in the
//    variable y

band.albums = []
let albums = y
// let albums = y
// let y = band.albums
console.log(albums.length)

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.
band.members.push('Tiny Weymouth', 'Chris Franz', 'Jerry Harrison' )
console.log(band.members)

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    y above.

if (albums.length >= 6) {
  console.log(`Talking Heads were a prolific band`)
} else {
  console.log(`Talking heads didnt have much output`)
}

// 2. Write a conditional to check if the number of albums in
//    y is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
//    the number of albums.
let X = albums.length
if (X === X % 2) {
  console.log(`the number of X is odd`)
} else {
  console.log(`the number of X is even`)
}

// 3. Write conditionals to check if the number of albums in
//    y is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
//
//    with Y being the number of albums.

// let y = albums.length
// console.log(y)
  if (y % 2 === 0 || y % 3 === 0) {
  console.log(`The number ${albums.length} is divisible by 2`)
  } else {
    console.log(`The number ${albums.length} is divisible by 2 or 3`)
  }

// 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.

  if (y % 0 === 0) {
  console.log("The number Y is divisible by 0")
  } if (y % 1 === 0) {
    console.log("The number Y is divisible by 1")
  } if (y % 6 === 0) {
    console.log("The number Y is divisible by 6")
  } if (y % 7 === 0) {
    console.log("The number Y is divisible by 6")
  } if (y % 9 === 0) {
    console.log("The number Y is divisible by 6")
  }
//    Make sure it always works!

/////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album

for (let i = 0; i < albums.length; i++) {
console.log(albums[i]);
}


// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!
let sireTally = 0
// if (albums.albumDetails.labels === "sire" || albums.labels === "sire") {
//   for (i = 0; i < )
// }
albums.forEach(function(label) {
  if (label.albumDetails.label === "Sire") {
    sireTally ++
  } else if (albums.albumDetails.label === "Sire") {
    sireTally++;
  } else {}
})
console.log(sireTally)