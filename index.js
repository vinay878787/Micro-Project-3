const data = require("./food.json");
//  console.log(data);
// - [ ]  list all the food items
const foodName = data.map((food)=>food.foodname);
console.log(foodName);
// // - [ ]  list all the food items with category vegetables
const vegetables = data.filter((food)=>food.category==="Vegetable");
console.log(vegetables);
// // - [ ]  list all the food items with category fruit
const fruit = data.filter((food)=>food.category === "Fruit");
console.log(fruit);
// // - [ ]  list all the food items with category protiens
const proteins = data.filter((food)=>food.category==="Protein");
 console.log(proteins);
// // - [ ]  list all the food items with category nuts
const nuts = data.filter((food)=>food.category==="Nuts");
console.log(nuts);
// // - [ ]  list all the food items with category grains
const grains = data.filter((food)=>food.category==="Grain");
console.log(grains);
// // - [ ]  list all the food items with category dairy
const dairy = data.filter((food)=>food.category==="Dairy");
console.log(dairy);
// // // - [ ]  list all the food items with calorie above 100
const calGt100 = data.filter((food)=>food.calorie>100);
console.log(calGt100);
// // // - [ ]  list all the food items with calorie below 100
const calLt100 = data.filter((food)=>food.calorie<100);
console.log(calLt100);
// - [ ]  list all the food items with highest protien content to lowest
const dataDesc = data.map((food)=>food).sort(function(a,b){
    return b.protiens - a.protiens;
})
console.log(dataDesc)

// - [ ]  list all the food items with lowest cab content to highest
const dataAsc = data.map((food)=>food).sort((a,b)=>{
    return a.cab - b.cab;
})
console.log(dataAsc);
