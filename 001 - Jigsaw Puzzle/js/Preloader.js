
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {
	
	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice  background and a loading progress bar
		this.bg = this.add.sprite(0, 0, 'bg');
		this.background = this.add.sprite(230, 295, 'preloaderBackground');
		this.preloadBar = this.add.sprite(230, 295, 'preloaderBar');
		this.usualsuspectsLogo = this.add.sprite(230, 139, 'usualsuspectsLogo');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.

		// Main Menu Assets
		this.load.spritesheet('playButton', 'assets/images/play_button.png', 287, 57);
		this.load.spritesheet('backButton', 'assets/images/back_button.png', 92, 43);
	    this.load.image('gameNum', 'assets/images/game_num.png');
	    this.load.image('title', 'assets/images/title.png');

		// Game Assets
	    this.load.image('bg_dark', 'assets/images/bg_dark.png');
	    this.load.image('interiorTitle', 'assets/images/interior_title.png');

	    this.load.image('base', 'assets/images/base.png');

    	this.load.image('piece1', 'assets/images/piece1.png');
    	this.load.image('piece2', 'assets/images/piece2.png');
    	this.load.image('piece3', 'assets/images/piece3.png');
    	this.load.image('piece4', 'assets/images/piece4.png');
    	this.load.image('piece5', 'assets/images/piece5.png');
    	this.load.image('piece6', 'assets/images/piece6.png');
    	this.load.image('piece7', 'assets/images/piece7.png');
    	this.load.image('piece8', 'assets/images/piece8.png');
    	this.load.image('piece9', 'assets/images/piece9.png');

    	this.load.image('basecolor', 'assets/images/basecolor.png');
    	this.load.image('welldone', 'assets/images/welldone.png');

    	this.load.spritesheet('jigsawWin_anim', 'assets/images/jigsawWin_anim.png', 292, 292);
    	this.load.spritesheet('jigsawMenu_anim', 'assets/images/jigsawMenu_anim.png', 375, 376);


	},

	create: function () {

		//	Once the load has finished we disable the crop
		this.preloadBar.cropEnabled = false;
		this.state.start('MainMenu');

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		// if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		// {
		// 	this.ready = true;
		// 	this.state.start('MainMenu');
		// }

	}

};
