const album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
}
const label = album1.albumDetails.label;
  console.log(label)

album1.title = "Talking Heads: 77"
console.log(album1.title)

const album2 = {
    title: "More Songs About Buildings and Food",
    albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
};

const album3 = {
    title: "Fear of Music",
    albumDetails: {
    released: "August 3, 1979",
    label:    "Sire",
    formats:  ["Cassette"]
  }
};

album3.albumDetails.formats.push(album2.albumDetails.formats[0])
  console.log(album3)

album3.released = new Date('August 3, 1979');
  console.log(album3)

const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};
album4.albumDetails.label = "Sire";
  console.log(album4)

const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
}
album5.albumDetails.formats = "CD, Casette, LP";
  console.log(album5)

const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
}

album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase();
  console.log(album6)

const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
};

album7.albumDetails.labels = album7.albumDetails.labels.split()
  console.log(album7)

const album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    label:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
};

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
];

// PART 3 - DATA TYPES & STRUCTURES

let band = {};
  band.name = "Talking Heads";
  band.members = ["David Byrne"];
  band.albums = talkingHeadsAlbums;

band.members.push("Timy Weymouth");
band.members.push("Chris Franz");
band.members.push("Jerry Harrison");

console.log(band.members)


// PART 4 CONDITIONAL LOGIC

if(talkingHeadsAlbums.length >= 6) {
  console.log("Talking Heads were a prolific band");
} else {
  console.log("Talking heads didnt have much output");
}

