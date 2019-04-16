//load.js
var loadState = {
	preload: function(){
		game.load.image('star', 'assets/beleriand/star.png');
		game.load.image('beleriand', 'assets/beleriand/beleriand.jpg');
 	},
 	create: function(){
 		game.state.start('update');
 	}
};
