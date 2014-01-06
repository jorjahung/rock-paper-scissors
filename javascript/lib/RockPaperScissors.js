function Player(name) {
  this.name = name;
  // console.log("New player created")
}

Player.prototype.picks = function() {
  // if(foo === bar) {

  // }
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  return this.player1;
}