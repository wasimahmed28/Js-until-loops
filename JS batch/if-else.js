let a = "Vanilla";
let customerBanned = false;
let toppings=true;
let reply;
if(customerBanned){
    reply = "We cannot serve you."
}
else if(a && toppings){
    reply =`You chose ${a} Ice Cream with toppings`;
}
else if(a){
    reply =`You chose ${a} Ice Cream`;
}
else{
    reply = `We are sorry. We are out of ${a} Ice Cream`
}
console.log(reply);
//-----------------------------------------------------

let score =89;
let collegeStudent = true;
let grade;

if(score>=90){
    grade = "A"
}else if(score>=80){
    grade = "B"
}else if(score>=70){
    grade = "C"
}else if(score>=60){
    grade= "D"
}else{
    if(collegeStudent){
        grade="U"
    }
    else{
        grade="F"
    }
}
console.log(grade)