//typeOf

function typeOf(val) {
   var typeOfVar = val;
   console.log(typeOfVar);

   return typeof spiderMan;
}

// indexOf

function indexOf(inputIndexOf) {
   const arr = [12, 43, 27, 74];

   return arr.indexOf(inputIndexOf) != -1;
}

// spliceAdd

function spliceAdd(inputSpliceAdd) {
   const arr = ["LeBron James is", "than Michael Jordan"];
   arr.splice(1, 0, inputSpliceAdd);
   return arr;
}

// spliceRemove
function spliceRemove(inputSpliceRem) {
   const arr = [2, 5, 7, 9, 2, 4, 1];
   arr.splice(inputSpliceRem);

   return arr;
}
// randomRange

function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// profileLookUp

// Setup
var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

// Activating a function to look up name and prop
function lookUpProfile(name, prop) {
   //Input any of the following names :Harry, Akira, Sherlock, Kristian
   // Followed by: lastName, number, or likes to receive profiles value

   // Loop through the array of contacts to find each object
   for (var index = 0; index < contacts.length; index++) {
      //  console.log(contacts[i].firstName)

      // Verifies first Name of lookUpProfile
      // Takes current index, then accesses the key (firstName) and checks to see if it is equal to the name passed into the function (name)
      if (contacts[index].firstName === name) {
         // Returns contact with value , or (||) "No such property" if prop doesn't correspond with the key of prop
         return contacts[index][prop] || "No such property";
      }
   } //
   return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

// Counting cards function

// Global variable, Will not be manipulated
var count = 0;
// Card parameter, will either increawe or descrease count variable
function countingCards(card) {
   // Checks card value, In the case of 2,3,4,5,6, Increment value
   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      // In the case of 10,J,Q,K,A, Decrement value
      // In the case of 7,8,9 Decrement value as well
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }

   // Variable that tells player to either "Hold" or "Bet"
   var output = count;

   // If count is more than 0, will return Bet
   if (count > 0) {
      output += " Bet";
      // If count is negative, will return Hold
   } else {
      output += " Hold";
   }

   // Console log to return see counting results
   console.log(output);

   return output;
}

// Results of function. cc = card count
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
