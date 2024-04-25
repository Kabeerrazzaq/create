//function googlemap (form : string , to : string){
//console.log(`i want to go form ${form} to my ${to}`)
//}
//("governerHouse" , "home" )
//function Marriage (choice:string = " ammi ki choice "){
//.log(choice);
//} 
//Marriage("Meri choice");
//function game(username : string = "guest123"){
//  console.log(username);
//}
//game("kabeer");
// add(dig:number = 5 , dig2:number= 2){
//console.log(dig + dig2)
//}
//add(10,undefined);
//function CookMeal(type:string , dishname:string){
//return `${type} , ${type}`
//}
//console.log(CookMeal("ckn" , "biryani"));
//
// Name (name : string , age : string ):string {
//let info = `${name} ${age}`
//return info 
//}
//console.log(Name("Ali" , "22"));
//global scope variable
//block scope variable 
//arrow function
// default parameters
//function greeting(myName : string , greet : string = "Hello"){
//console.log(`${greet} ,${myName} `)
//}
//greeting( "kabeer",);
//function mySum(a:number = 10 , b:number= 20, c:number = 400){
// console.log(a+b+c)
//}
//mySum(15);
//function mySub(w:number=2 , m:number){
// console.log(w+m)
//}
//mySub(undefined,10);
function buyPizza(size, flovr) {
    if (flovr === void 0) { flovr = " special "; }
    console.log("Sir, here is your " + size + flovr + "pizza enjoy it");
}
buyPizza("large");
function dewooSeat(totalseat, gender) {
    if (gender === void 0) { gender = "male"; }
    console.group("your's seat are ".concat(totalseat, " for ").concat(gender));
}
dewooSeat(2);
function sum(a, b, c, d) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    if (d === void 0) { d = 0; }
    console.log(a + b + c + d);
}
sum(10);
function makeShirt(size, message) {
    if (message === void 0) { message = " i lovee typescript"; }
    console.log(" we will sell you a shirt of size ".concat(size, " , with message on it: ").concat(message));
}
makeShirt("large");
makeShirt("koi bhi", "Hello");
