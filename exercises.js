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

let sensibly = album1.albumDetails.label;
console.log(sensibly);
album1.title = "Talking Heads: 77";
console.log(album1.title);
// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

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
let clone = album2.albumDetails.formats;
clone.push("LP");
album3.albumDetails.formats = clone;
console.log(album3.albumDetails.formats);
// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats
// Check out the Array.push method!
let x = album3.albumDetails.released;
album3.albumDetails.released = new Date(x);
console.log(album3.albumDetails.released);
// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!

const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
}  
album4.albumDetails.label = "Sire";
console.log(album4.albumDetails.label);
// 5. Add the label "Sire" to album4's details

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}  
album5.albumDetails.formats = ["CD","Cassette","LP"];
console.log(album5.albumDetails.formats);
// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
}  
let upper = album6.albumDetails.labels[1];
let text = upper.toUpperCase();

album6.albumDetails.labels[1]=text;
console.log(album6.albumDetails.labels);
// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
}  
let i = album7.albumDetails.labels;
let newI = i.split(" ");

album7.albumDetails.label = newI;
console.log(album7.albumDetails.label);
// 8. Convert album7's 'labels' property from the string value
//    "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!

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

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
]  

const band= {
  name: "Talking Heads",
  members: ["David Byrne"],
  albums: talkingHeadsAlbums
  
}
band.members.push("Tiny WeyMouth","Chris Franz","Jerry Harrison");
console.log(band);
// 1. Create an object literal called `band`.

// 2. Give it the property `name` and set it to "Talking Heads"

// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.

// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////
let eTrue = false;
for(let e =0; e < talkingHeadsAlbums.length;e++){
  if (e >=6){
   eTrue= true;
  }
}
if(eTrue==true){
  console.log("Talking Heads were a prolific band");
}
else{
  console.log("Talking Heads didn\'t have much output.");
}
// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.

let num1= 0;

for(let check in talkingHeadsAlbums){
  num1 = check;
}
num1++;
//^^this is because index of array starts at 0 so i need to add one to get the right numerical amount
if((num1%2)==1){
 console.log(`The number ${num1} is odd`);
  }
  else{
   console.log(`The number ${num1} is even`);
  }


// 2. Write a conditional to check if the number of albums in
//    talkingHeadsAlbums is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
//    the number of albums.

  


for(let check1 =1; check1<=talkingHeadsAlbums.length; check1++){
  if(((check1%2)==0)&&((check1%3)==0)){
    console.log(`The number ${check1} is divisible by 2 and 3`);
    // alreadySolved =true;
  }
  else if((check1%2)==0){ console.log(`The number ${check1} is divisible by 2`);}
  else if((check1%3)==0){ console.log(`The number ${check1} is divisible by 3`);}
  else{console.log(`The number ${check1} is not divisible by 2 or 3`)}
}
// 3. Write conditionals to check if the number of albums in
//    talkingHeadsAlbums is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
//
//    with Y being the number of albums.

// 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
//    Make sure it always works!

/////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

for(let w in talkingHeadsAlbums){
  console.log(talkingHeadsAlbums[w]);
}
// 1. Use a for loop to print out the name of each Talking Heads album
let sireTally= 0;
let randomVal= null;
let randomVals = null;
let result = null;
let lookUp = 'label';
let lookUps ='labels';
for(let h=0 ; h <talkingHeadsAlbums.length;h++){
  if(talkingHeadsAlbums[h].albumDetails.label =="Sire"){
    sireTally++;
  }
  randomVals= talkingHeadsAlbums[h].albumDetails.labels;
randomVal =talkingHeadsAlbums[h].albumDetails.labels;
  result= Array.isArray(randomVals);
  if(result===true){
  for(let r =0;r < randomVals.length;r++){
    if(talkingHeadsAlbums[h].albumDetails.labels[r]=="Sire"){

      sireTally++;
    }
  }
  }
  
  if(typeof randomVal === 'string'){
    let split = randomVal.split(" ");
 
    for(let s =0;s < split.length;s++){
    if(split[s]=="Sire,"){

      sireTally++;
    }
  }
  }

}
console.log(`Sire count: ${sireTally}`);
// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!
