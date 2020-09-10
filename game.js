var config = {
    type: Phaser.AUTO,
     scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 608,
        height: 608,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }

    },
    
    //la importante es la primera, que es la que arranca
    scene: [Scene3, Scene1, Scene2]
};

var game = new Phaser.Game(config);
var map;
var mapimages;
var pacman;
var pacmanmalo;
var pacmanmalo2;
var pacmanmalo3;
var cursor_a;
var cursor_d;
var cursor_w;
var cursor_s;
var dot;
var score = 0;
var scoretext;
var gameOver;
var doteat = 0;
var bstext;
var bestscore = 0;
var enemigos;
var velocidad = 300;
var mvelocidad = -300;
var bigdot;