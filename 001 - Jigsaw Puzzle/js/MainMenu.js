
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		// this.music = this.add.audio('titleMusic');
		// this.music.play();

		// this.add.sprite(0, 0, 'titlepage');

		// Add Main Menu Graphics
	    		
	    this.bg = this.add.sprite(0, 0, 'bg');
	    this.usualsuspectsLogo = this.add.sprite(34, 33, 'usualsuspectsLogo');
	    this.title = this.add.sprite(34, 209, 'gameNum');
	    this.title = this.add.sprite(34, 292, 'title');

	    // Add "Click here to Play" Button
		this.playButton = this.add.button(33, 362, 'playButton', this.startGame, this, 1, 0, 1);
		this.playButton.input.useHandCursor = true;

	 	// Add gears animation
	   	this.animationMenu = this.game.add.sprite(304, 40, 'jigsawMenu_anim');
        this.animationMenu.animations.add('think');
        this.animationMenu.animations.play('think', 24, true);


	},

	update: function () {

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		// this.music.stop();

		// And start the actual game
		this.state.start('Game');

	}

};
