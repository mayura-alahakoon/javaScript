let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 6:
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
  var betHold = "Hold";
  if (count > 0 ){
    betHold = "Bet";
  }

  return count + " " + betHold;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');