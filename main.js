"use strict";


// (function() {
//
//   let foodName = document.getElementById('addFood');
//   foodName.addEventListener("click", main, false);
//



 function main() {

   let type = document.getElementById("food").value;
   let f = document.getElementById("fruit").checked;
   let v = document.getElementById("veg").checked;
   // let f = document.getElementById("fruit");
   // let v = document.getElementById("veg");
   // listed.innerText = type;
   // let addFoodItem;

   // let option = document.getElementById("fruit").checked;


     if (f === true) {
       let foodList = document.createElement("LI");    // https://www.w3schools.com/jsref/dom_obj_li.asp
       let food = document.createTextNode(`${type}`);
       document.getElementById("fruitList").appendChild(foodList);
       foodList.appendChild(food);
     }

     else if (v === true) {                           //  https://www.w3schools.com/js/js_if_else.asp
       let foodList = document.createElement("LI");
       let food = document.createTextNode(`${type}`);
       document.getElementById("vegList").appendChild(foodList);
       foodList.appendChild(food);
     }

     // if (option === true) {
     //   addFoodItem = document.getElementById("fruitList");
     // }

     // else {
     //   addFoodItem = document.getElementById("vegList");
     // }

     document.getElementById("food").value = " ";

 }


// })();
