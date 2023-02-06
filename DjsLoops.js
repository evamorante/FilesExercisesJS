//for...next
var people = [
    "Tim",
    "Jony",
    "Angela",
    "Craig"
];

for (var i = 0; i < people.length; i++){
    var person = people[i];
    console.log(i +"."+person);
}

//while
var i = 0
while (i < people.length) {
    var person = people[i];
    console.log(i+":"+person);
    i++
}

//for...in
var album = {
    band: "Nirvana",
    title: "Nevermind",
    year: 1991,
    tracks: 12
  }
  
  for (var key in album) {
    console.log(key + ": " + album[key]);
  }
//copié-collé --> à retriturer !!!!  
