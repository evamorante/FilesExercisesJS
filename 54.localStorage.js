// to store datas in local storage
localStorage.setItem("username", "Eva");

//to access these values
const name = localStorage.getItem("name");

//to clear all datas
localStorage.clear();

//to clear just one data
localStorage.removeItem("username");

//to read a key doesn't exist
const val = localStorage.getItem("password");
console.log(val);
//how to check if your value exists or not :
//??

