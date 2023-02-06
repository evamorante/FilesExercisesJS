//if/else
var nom = "Luke";
if (nom == "Luke"){
    console.log("Use the Force.");
}
else {
    console.log("Move along.");
}
//if else utilisable à satiété au besoin ;)

//switch function - with de break function

var day = 3;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("It's the week-end");
}

//switch function - without the break function

var day = 4;

switch(day){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Week day");
    break;
  default:
    console.log("Not a valid day");
}

//ternary operator : <condition>? <value true>:<value false>

var hour = 9;
var timeOfDay = '';

timeOfDay = hour <12? 'before lunch':'after lunch';
console.log(timeOfDay);
