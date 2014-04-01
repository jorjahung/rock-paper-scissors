// Player Class
function Player(name) {
  console.log(name);
  this.name = name;
  this.score = 0;
};

Player.prototype.picks = function(playerPick) {
  this.pick = new Pick(playerPick);
};


// Pick Class
function Pick(name) {
  this.name = name;
};

// Game Class
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2
};

Game.prototype.rules = {
  scissors: { paper: 'cuts', lizard: 'decapitates'},
  paper:    { rock: 'covers', spock: 'disproves'},
  lizard:   { spock: 'poisons', paper: 'eats' },
  rock:     { scissors: 'smashes', lizard: 'crushes' },
  spock:    { rock: 'vaporizes', scissors: 'melts' }
};

Game.prototype.choosing_message = function() {
    return this.player1.name + " chose " + this.player1.pick.name + ". " + this.player2.name + " chose " + this.player2.pick.name + ".";
};

Game.prototype.winner = function() {
  var player1_pick = this.player1.pick.name;
  var player2_pick = this.player2.pick.name;
  var player1_wins = this.rules[this.player1.pick.name][this.player2.pick.name];
  var player2_wins = this.rules[this.player2.pick.name][this.player1.pick.name];
 

  if(player1_wins) {
    this.player1.score = this.player1.score + 1;
    return player1_pick.charAt(0).toUpperCase() + player1_pick.slice(1) +" "+ player1_wins +" "+ player2_pick + ". The winner is: " + this.player1.name.toUpperCase();
  }

  if(player2_wins) {
    this.player2.score = this.player2.score + 1;
    return player2_pick.charAt(0).toUpperCase() + player2_pick.slice(1)  +" "+ player2_wins +" "+ player1_pick + ". The winner is: " + this.player2.name.toUpperCase();
  } 

  else {
    return 'Draw! You are both losers :P';
  };
};

Game.prototype.scores = function() {
  return "<i>"+ this.player1.name+ "</i>: " + this.player1.score + " <i>" + this.player2.name+ "</i>: " + this.player2.score;
}