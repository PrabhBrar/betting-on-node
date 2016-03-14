var prompt = require('sync-prompt').prompt;
function get_computer_number(min,max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function get_bet_amount () {
  var bet_amount = parseInt((prompt("Place a bet(between $5 and $10): ")));
  if (isNaN(bet_amount)) {
    bet_amount = 0;
  }
  if (bet_amount > 10 || bet_amount < 5) {
    get_bet_amount();
  }
  if (bet_amount > user_bankroll) {
    console.log("Bet can not exceed bankroll, your bankroll is $" + user_bankroll);
    get_bet_amount();
  }
  return(bet_amount);
}

function get_user_number () {
  var user_number = parseInt((prompt("Please choose a number(between 1 and 10): ")));
  if (isNaN(user_number)) {
    user_number = 0;
  }
  if (user_number > 10 || user_number < 1) {
    get_user_number();
  }
  return(user_number);
}

function update_bank_roll (user_bankroll, computer_number, user_number, user_bet_amount) {
  if (user_number == computer_number) {
    user_bankroll += user_bet_amount;
    console.log("You won!!");
  }
  else if (user_number == computer_number - 1 || user_number == computer_number + 1) {
    console.log("Close!! Computer choice was: " + computer_number);
  }
  else {
    user_bankroll -= user_bet_amount;
    console.log("You Lost!! Computer choice was: " + computer_number);
  }
  return(user_bankroll);
}

function play (user_bankroll) {
  var user_bet_amount = get_bet_amount(),
      user_number = get_user_number(),
      computer_number = get_computer_number(1,10);
  return(update_bank_roll(user_bankroll, computer_number, user_number, user_bet_amount));
}

var user_bankroll = 100;
while (user_bankroll > 0) {
  debugger;
  console.log("You have $" + user_bankroll + " in your account.");
  user_bankroll = play(user_bankroll);
}