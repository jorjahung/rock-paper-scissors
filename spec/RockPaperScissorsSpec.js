describe("Player", function() {
  var player;
  beforeEach(function() {
    player = new Player('Player 1');
  });

  it('has a name', function() {
    expect(player.name).toEqual('Player 1');
  });

  it('can pick', function() {
    player.picks('Rock');
    expect(player.pick.name).toEqual('Rock');
  });
});

describe("Pick", function() {
  it('has a name', function() {
    var pick = new Pick('Rock');
    expect(pick.name).toEqual('Rock');
  });
});

describe("Game", function() {
  it('has two players', function() {
    var game = new Game('Joe', 'Martha');
    expect(game.player1).toEqual('Joe');
    expect(game.player2).toEqual('Martha');
  });

});

describe('winning and losing', function() {
  var player1, player2, game
  beforeEach(function() {
    player1 = new Player('Joe');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  it('rock should beat scissors', function() {
    player1.picks('rock');
    player2.picks('scissors');
    expect(game.winner()).toBe('Rock smashes scissors. The winner is: JOE');
  });

  it('rock should lose to paper', function() {

    player1.picks('rock');
    player2.picks('paper');
    expect(game.winner()).toBe('Paper covers rock. The winner is: BOB');

  });

  it('rock vs rock should be a draw', function() {

    player1.picks('rock');
    player2.picks('rock');
    expect(game.winner()).toBe('Draw! You are both losers :P');

  });


  it('should have a choosing message', function() {

    player1.picks('rock');
    player2.picks('paper');
    expect(game.choosing_message()).toBe('Joe chose rock. Bob chose paper.');

  });

  
});