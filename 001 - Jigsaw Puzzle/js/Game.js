
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {

        this.piecesleft = 9;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add graphics
        this.bg = this.add.sprite(0, 0, 'bg');
        this.interiorTitle = this.add.sprite(40, 8, 'interiorTitle');
        this.backButton = this.add.button(568, 19, 'backButton', this.backToMenu, this, 1, 0, 1);
        this.backButton.input.useHandCursor = true;
        this.bg_dark = this.add.sprite(0, 72, 'bg_dark');
        this.base = this.game.add.sprite(368, 121, 'base');


        // Add Draggable Pieces 
        // Initial position is hard coded, 
        // it would be nice to disposed them randomly :)
        this.piece1 = this.game.add.sprite(24, 269, 'piece1');
        this.piece2 = this.game.add.sprite(244, 149, 'piece2');
        this.piece3 = this.game.add.sprite(161, 115, 'piece3');
        this.piece4 = this.game.add.sprite(27, 104, 'piece4');
        this.piece5 = this.game.add.sprite(70, 161, 'piece5');
        this.piece6 = this.game.add.sprite(203, 291, 'piece6');
        this.piece7 = this.game.add.sprite(203, 201, 'piece7');
        this.piece8 = this.game.add.sprite(154, 249, 'piece8');
        this.piece9 = this.game.add.sprite(58, 331, 'piece9');


        // Pieces final position (Hard coded)
        this.piece1.finalPositionX = 368;
        this.piece1.finalPositionY = 121;

        this.piece2.finalPositionX = 465;
        this.piece2.finalPositionY = 121;

        this.piece3.finalPositionX = 538;
        this.piece3.finalPositionY = 121;

        this.piece4.finalPositionX = 368;
        this.piece4.finalPositionY = 218;

        this.piece5.finalPositionX = 440;
        this.piece5.finalPositionY = 218;

        this.piece6.finalPositionX = 561;
        this.piece6.finalPositionY = 193;

        this.piece7.finalPositionX = 368;
        this.piece7.finalPositionY = 314;

        this.piece8.finalPositionX = 465;
        this.piece8.finalPositionY = 293;

        this.piece9.finalPositionX = 535;
        this.piece9.finalPositionY = 314;

        // Remember the original position 
        for (var i = 1; i <= 9; i++) {

            this['piece' + i].originX = this['piece' + i].x;
            this['piece' + i].inputEnabled = true;
            this['piece' + i].input.enableDrag(false, true);
            this['piece' + i].events.onDragStop.add(this.pieceDragStop, this);

        };

	},


    // When we release a piece do this...
    pieceDragStop: function(item) {

        // Calculate the distance between the piece and its final spot
        this.totalDistance = this.game.physics.arcade.distanceToXY( item , item.finalPositionX, item.finalPositionY);

        // If the distance is minor than 50 pixels the piece is placed in its final spot,
        // otherwise the piece return to its original position
        if (this.totalDistance < 50) {

            this.game.add.tween(item).to({x: item.finalPositionX, y: item.finalPositionY }, 500, Phaser.Easing.Back.Out, true);
            // This piece is not draggable anymore
            item.inputEnabled = false;
            // Pieces to finish minus one
            this.piecesleft--;

            // If all the pieces are assembled the puzzle is finished :)
            if (this.piecesleft === 0) {

                // Show a greeting message 
                this.basecolor = this.game.add.sprite(368, 121, 'basecolor');
                this.welldone = this.game.add.sprite(179.5, 251.5, 'welldone');
                this.welldone.anchor.setTo(0.5, 0.5);
                this.game.add.tween(this.welldone.scale).from({x: 0, y: 0 }, 500, Phaser.Easing.Back.Out, true);

                // Play the final animation
                this.animationWin = this.game.add.sprite(366, 119, 'jigsawWin_anim');
                this.animationWin.animations.add('win');
                this.animationWin.animations.play('win', 24, true);
            
            };

        } else { 

            this.game.add.tween(item).to({x: item.originX, y: item.originY }, 500, Phaser.Easing.Back.Out, true);

        };
    },

	update: function () {

	},

    backToMenu: function (pointer) {

        this.state.start('MainMenu');

    }

};
