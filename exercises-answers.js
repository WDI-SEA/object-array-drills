// Answer 1. and 2.

const album1 = {
    title: "Talking Heads",
    albumDetails: {
      released: new Date("September 16, 1977"),
      label:    "Sire",
      formats:  ["LP"]
    }
  }  
  
  let foundSire = album1.albumDetails.label
  
  album1.title = "Talking Heads: 77";
  
  
  // Answer 3. 4. 
  
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
  
  const album4 = {
    title: "Remain in Light",
    albumDetails: {
      released: new Date("October 8, 1980"),
      formats: ["Cassette", "LP"]
    }
  }  
  
  
  album3.albumDetails.formats.push(album1.albumDetails.formats[0])
  
  album3.released = new Date("July 14, 1978")
  
  // Answer 5
  
  album4.albumDetails.label = foundSire
  
  // Answer 6
  
  const album5 = {
    title: "Speaking in Tongues",
    albumDetails: {
      released: new Date("May 31, 1983"),
      label:    "Sire"
    }
  }  
  
  album5.formats = ["CD", "Cassette", "LP"]
  
  // Answer 7
  
  const album6 = {
    title: "Little Creatures",
    albumDetails: {
      released: new Date("June 10, 1985"),
      labels:   ["Sire", "emi"],
      formats:  ["CD", "cassette", "LP"]
    }
  }  
  
  let toBigEMI = album6.albumDetails.labels[1].toUpperCase()
  
  album6.albumDetails.labels[1] = toBigEMI
  
  
  // console.log(album6)
  
  // Answer 8
  
  const album7 = {
    title: "True Stories",
    albumDetails: {
      released: new Date("October 7, 1986"),
      labels:   "Sire, EMI",
      formats:  ["CD", "cassette", "LP"]
    }
  }  
  
  let newLabels = album7.albumDetails.labels.split(", ")
  
  album7.albumDetails.labels = newLabels
  
  // console.log(album7)
  
  //PART 2
  //answer 1 2 3 4 5 
  
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
  
  let band = {
    name: "Talking Heads",
    members: ["David Byrne"],
    albums: [talkingHeadsAlbums]
  }
  
  
  band.members.push("Tiny Weymouth", "Chris Franz", "Jerry Harrison")
  
  //PART 3
  // answer 1
  
  if (talkingHeadsAlbums.length > 6){
    // console.log("Talking Heads were a prolific band")
  } else{
    // console.log("Talking heads didn't have much output.")
  }
  
  // answer 2
  
  if (talkingHeadsAlbums.length % 2){
    // console.log(`The number ${talkingHeadsAlbums.length} is odd`)
  } else {
    // console.log(`The number ${talkingHeadsAlbums.length} is even`)
  }
  
  
  // answer 3 & 4
  
  if (talkingHeadsAlbums.length % 2 === 0){
  
    if(talkingHeadsAlbums.length % 3 === 0){
  
      // console.log(`The number ${talkingHeadsAlbums.length} is divisible by 2 & 3`)
  
    } else {
  
      // console.log(`The number ${talkingHeadsAlbums.length} is divisible by 2`)
  
    }
  
  } else if (talkingHeadsAlbums.length % 3 === 0) {
  
    // console.log(`The number ${talkingHeadsAlbums.length} is divisible by 3`)
  
  } else {
  
    // console.log(`The number ${talkingHeadsAlbums.length} is not divisible by 2 or 3`)
  
  }
  
  // console.log(talkingHeadsAlbums.length % 3)
  
  
  
  // Part 4 : For Loops
  // answer 1
  
  for (let i = 1; i< talkingHeadsAlbums.length; i++){
  
    // console.log(talkingHeadsAlbums[i].title)
  }
  
  // answer 2
  
  
  // const talkingHeadsAlbums = [
  //   album1,
  //   album2,
  //   album3,
  //   album4,
  //   album5,
  //   album6,
  //   album7,
  //   album8,
  // ]   
  
  
  let sireTally = 0;
  
  for (let i = 1; i < talkingHeadsAlbums.length; i++){
    if (talkingHeadsAlbums[i].albumDetails.label === "Sire"){
  
      sireTally++
    }
  }
  
  
  for (let i = 5; i < talkingHeadsAlbums.length; i++){
    if (talkingHeadsAlbums[i].albumDetails.labels[0] === "Sire"){
  
      sireTally++
    }
  }
  // console.log(sireTally)
  
  
  
  // PART 5 
  // Answer 1
  
  
  // const ticketSections = [
  //   {name: "Boutros Boutros-Ghali", section: "center", type: "premium",  seats: 1},
  //   {name: "Ann Richards",          section: "left",   type: "premium",  seats: 2},
  //   {name: "George Will",           section: "left",   type: "standard", seats: 2},
  //   {name: "Marion Barry",          section: "center", type: "standard", seats: 8},
  //   {name: "Warren Christopher",    section: "right",  type: "standard", seats: 1},
  //   {name: "Bob Dole",              section: "center", type: "premium",  seats: 3}
  // ]  
  
  // const names = ticketSections.map((nameo, index, array)=>{
  
  //   return nameo.name
  
  // })
  
  // console.log(names)
  
  // for (let i = 0; i < names.length; i++){
  
  
  //       if (ticketSections[i].type === "premium"){
  
  //           if (ticketSections[i].section === "center"){
  
  //             console.log(`Welcome ${names[i]}! You may sit anywhere in the first 3 rows of the center section`)
  
  //           } else if (ticketSections[i].section === "left"){
  
  //             console.log(`Welcome ${names[i]}! You may sit anywhere in the first 3 rows of the right section`)
  
  //           } else if (ticketSections[i].section === "right"){
  
  //             console.log(`Welcome ${names[i]}! You may sit anywhere in the first 3 rows of the left section`)
  
  //           }
  
        
  
  
  //       } else if (ticketSections[i].type === "standard"){
  
  //         if (ticketSections[i].section === "center"){
  
  //            console.log(`Welcome ${names[i]}! You and your party may sit anywhere except first 3 rows of the center section`)
  
  //         } else if (ticketSections[i].section === "left"){
  
  //           console.log(`Welcome ${names[i]}! You and your party may sit anywhere except first 3 rows of the left section`)
  
  //         } else if (ticketSections[i].section === "right"){
  
  //           console.log(`Welcome ${names[i]}! You and your party may sit anywhere except first 3 rows of the right section`)
  
  //       }
  
  // }
  // }
  
  
  // Answer 2
  
    //  - {amount: 50.00, discount: true,  zombie: false}  => "STANDARD $10 DRINKS"
    //  - {amount: 65.00, discount: false, zombie: false}  => "PREMIER NO DRINKS"
    //  - {amount: 80.00, discount: false}                 => "ERROR: INVALID TICKET"
    //  - {amount: 80.00, discount: true}                  => "PREMIER PLUS"
    //  - {amount: 90.00}                                  => "PREMIER PLUS"
    //  - {amount: 50.00, discount: true,  zombie: true}   => "STANDARD $20 DRINKS"
  // const tickets = [
  //   {amount: 50.00, discount: true,  zombie: false}, 
  //   {amount: 65.00, discount: false, zombie: false}, 
  //   {amount: 80.00, discount: false},                
  //   {amount: 80.00, discount: true},                 
  //   {amount: 90.00},                                 
  //   {amount: 50.00, discount: true,  zombie: true}  
  // ]  
  
  const tickets = [
    {amount: 50.00, discount: false, zombie: true},
    {amount: 60.00, discount: true,  zombie: false},
    {amount: 50.00},
    {amount: 65.00, discount: true,  zombie: true},
    {amount: 90.00, discount: false},
    {amount: 50.00, discount: true,  zombie: false},
    {amount: 50.00, zombie:   true},
    {amount: 80.00, discount: true},
    {amount: 90.00},
    {amount: 50.00, discount: true}
  ]  
  
  // --------------------------------------------------->
  
  const newTicket = tickets.forEach((price)=>{
  
  let ticketPrice = price.amount
  let ticketType = ""
  let checkDiscount = 0
  let checkDino = ""
  
  
  
  if (ticketPrice === 50){
    ticketType = "STANDARD"
  
  } else if(ticketPrice === 65){
    ticketType = "PREMIER"
  
  } else if (ticketPrice === 90){
    ticketType = "PREMIER PLUS"
  
  } else { 
    ticketType = "ERROR:INVALID TICKET"
  
  }
  
  
  
  if (price.discount === true){
    checkDiscount+= 10;
  }
  
  if (price.zombie === true){
    checkDiscount+= 10
  }
  
  if (ticketType != "ERROR:INVALID TICKET" && checkDiscount > 0){
  
    console.log(`${ticketType} $${checkDiscount} DRINKS`)
  
  } else if (ticketType === checkDiscount === 0){
  
    console.log(`${ticketType} NO DRINKS`)
  
  
  } else {
    console.log(`${ticketType}`)
  }
  
  })
  
  
  
  
  
  
  
  