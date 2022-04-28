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
// const album1label = album1label.albumDetails.label

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"
album1.title="Talking Heads: 77"


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
// album3.albumDetailsls.formats.push('LP')
// console.log(album3)

// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!
// album3.released = new Date("August 3, 1979")

const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
}  
album4.label = "Sire"
console.log(album4)
// 5. Add the label "Sire" to album4's details

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}  

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
album5.formats = ["CD", "Cassette", "LP" ]
console.log(album5)

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
}  
console.log(album6.albumDetails.labels[1].toUpperCase())
album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase()
  // album6.labels[1].toUpperCase();
// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",