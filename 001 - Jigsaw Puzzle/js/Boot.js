var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {

        // Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.pageAlignHorizontally = true;

    },

    preload: function () {

        // Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('preloaderBackground', 'assets/images/preloader_background.png');
        this.load.image('preloaderBar', 'assets/images/preloader_bar.png');
        this.load.image('usualsuspectsLogo', 'assets/images/usualsuspects_logo.png');
        this.load.image('bg', 'assets/images/bg.png');

    },

    create: function () {

        // By this point the preloader assets have loaded to the cache, we've set the game settings
        // So now let's start the real preloader going
        this.state.start('Preloader');

    }

};
