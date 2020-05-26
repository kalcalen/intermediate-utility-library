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
