// Arry

 let Mybakry : string[] = ["biscit" , "doodh" , "nimco", "slice"];

let studentNames : string[]= ["ahmad" , "kashif" , "mohid" , "zeeshan"];

let student = studentNames.indexOf
console.log(student);

let startArry : string =[];
startArry[0]  = "student";
console.log(startArry);

let myFruit : string[] = ["apple", "orange", "mango" , "leachi"]
myFruit[3]= "banana"
myFruit.pop();
myFruit.push("banana", "stawbery" , "leachi")
myFruit.shift();
myFruit.unshift("pineapple" , "cherry");

let Con_cate : string[] = Mybakry.concat(myFruit);
console.log(Con_cate);

let Allowedstuden:string[] = ["kashif" , "mohid", "moiz", "amaar" , "extra" ,"ahmad", "ahad", "samaad",]
if(Allowedstuden => 5){
    Allowedstuden.push("mubeen");
}
console.log(Allowedstuden);


let Fllowedstuden= Allowedstuden.slice(0,8)
console.log(Fllowedstuden);
let f_Allowedstuden : string[] = Allowedstuden.splice(0,3,)
console.log(f_Allowedstuden);


