function greet (gender){
    if (gender=="male"){
       return "Hello Sir! Welcome back";
    }else if (gender=="female"){
       return "Hello Madam ! Welcome back";
    }else{
        return "Hello ! Welcome back";
    }
}

//from this line, we are testing
console.log(greet("male"));
console.log(greet("female"));
console.log(greet("not specified"));