function googlemap (form : string , to : string){
console.log(`i want to go form ${form} to my ${to}`)
}
googlemap("governerHouse" , "home" )

function Marriage (choice:string = " ammi ki choice "){
    console.log(choice);

} 
Marriage("Meri choice");

function game(username : string = "guest123"){
    console.log(username);
}
game("kabeer");

function add(dig:number = 5 , dig2:number= 2){
console.log(dig + dig2)
}
add(10,undefined);

function CookMeal(type:string , dishname:string){
return `${type} , ${type}`
}
console.log(CookMeal("ckn" , "biryani"));

function Name (name : string , age : string ):string {
     let info = `${name} ${age}`
     return info 
}
console.log(Name("Ali" , "22"));



//global scope variable
//block scope variable 
//arrow function


 //default parameters
function greeting(myName : string , greet : string = "Hello"){
  console.log(`${greet} ,${myName} `)

}
greeting( "kabeer",);


function mySum(a:number = 10 , b:number= 20, c:number = 400){
  console.log(a+b+c)
}
mySum(15);

function mySub(w:number=2 , m:number){
  console.log(w+m)
}
mySub(undefined,10);

function buyPizza(size:string , flovr:string= " special "){
  console.log("Sir, here is your " + size +  flovr + "pizza enjoy it" )
}
buyPizza("large" ,  );

function dewooSeat(totalseat : number , gender : string= "male"){
  console.group(`your's seat are ${totalseat} for ${gender}`)
}
dewooSeat(2,)

function sum(a:number=0 , b:number=0 , c:number=0 , d:number=0){
  console.log(a+b+c+d);
}
sum(10)

function makeShirt(size:string , message:string= " i lovee typescript"  ){
  console.log(` we will sell you a shirt of size ${size} , with message on it: ${message}`);
}
makeShirt("large");
makeShirt("koi bhi" , "Hello");
