alert("Hello World")

let myBoolean = confirm("Ok === true\nCancel === false")

let variable = prompt("Please enter your name")

console.log(variable ?? "You didn't enter your name")

// nullish callescian operator : ??

// on pressing ok without typing anything you will get string in the console

// so

if(variable){
    console.log(variable.trim())
}else{
    console.log("You didn't enter your name")
}