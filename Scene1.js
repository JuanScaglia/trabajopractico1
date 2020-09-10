class Scene1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload ()
  {
  this.load.image('atlas', 'assets/atlas.png');
  this.load.tilemapTiledJSON('map', 'assets/pacmapa.json');
  this.load.atlas('todo', 'assets/atlas.png', 'assets/atlas_atlas.json');
  
  };

  create ()
{
   velocidad = velocidad - 50;

  var map = this.add.tilemap('map');
  mapimages = map.addTilesetImage('atlas', 'atlas');
  var layer2 = map.createStaticLayer('suelo', [mapimages], 0, 0);
  var layer = map.createStaticLayer('paredes', [mapimages], 0, 0);
  var layerp = map.getObjectLayer('puntos')['objects'];
  var dot = this.physics.add.staticGroup();
  layerp.forEach(object => {
    let obj = dot.create(object.x, object.y, 'todo','pacman02' );
    obj.setOrigin(0,1);
    obj.setSize(10,10).setOffset(27,-5);
  });

  bigdot = this.physics.add.sprite(250,280, 'todo', 'pacman02').setOrigin(0,0).setScale(1.5).setTint(0xff0000).setSize(10,10);
  
  pacman = new Personaje({scene:this, x:48, y:560, texture: 'todo', sprite:'pacman00'}).setSize(25,25);
  enemigos = new Enemigos({scene:this});
 
  //colisiones
 
  this.physics.add.collider(pacman, layer); 
  this.physics.add.collider(pacmanmalo, layer);
  this.physics.add.collider(pacmanmalo2, layer);
  this.physics.add.collider(pacmanmalo3, layer); 

  this.physics.add.collider(pacmanmalo, pacman, this.muerte, null, this);
  this.physics.add.collider(pacmanmalo2, pacman, this.muerte, null, this);
  this.physics.add.collider(pacmanmalo3, pacman, this.muerte, null, this); 

  this.physics.add.overlap(pacman, dot, this.puntos, null, this);
  this.physics.add.overlap(pacman, bigdot, this.bigpuntos, null, this);

  
  layer.setCollision([132, 132, 132, 132, 132, 132, 132, 132, 90, 48, 90, 132, 132, 132, 132, 132, 132, 132, 
    132, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 
    0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 
    34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 
    0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 90, 0, 34, 0, 
    34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 90, 48, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34,
    0, 34, 0, 48, 90, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 90, 132, 0, 34, 0, 34, 0, 34, 0, 
    34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 
    132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 
    34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 132, 132, 0, 34, 0, 34, 0,
    34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0,
    132, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 132, 132, 132, 132, 132, 132, 132, 132, 90,
    48, 90, 132, 132, 132, 132, 132, 132, 132, 132]);
   

   
    cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    scoretext = this.add.text(32,2, 'Puntos ' + score, {font: "25px Arial Black"}).setTint(0xfff000);
    bstext = this.add.text(256, 2, 'Mejor puntuación ' + bestscore, {font: "25px Arial Black"}).setTint(0xffffff);

  


};
  



update ()

//si ganas el nivel los puntos siguen sumandose
{
 if(doteat === 97)
 {this.scene.start('level1')
 doteat = 0;
 velocidad = velocidad + 100;
 mvelocidad = mvelocidad - 100;
};

  //mejor puntuación//     
  if (bestscore <= score){
   bestscore = score;
   bstext.setText('Mejor puntuación ' + score);
 }
 else if (bestscore >= score){
  bestscore = bestscore
  bstext.setText('Mejor puntuación ' + bestscore)   
 }
};

muerte(){
  this.gameOver();
}
gameOver() {    
  this.scene.start('level1')
score = 0;
doteat = 0;
velocidad = 300;
mvelocidad = -300;
};

bigpuntos(pacman, bigdot){
  bigdot.destroy(this);
  score = score + 500;
  scoretext.setText('Puntos ' + score);
 };

puntos(pacman, dot){
 dot.destroy(dot.x, dot.y);
 score = score + 100;
 doteat = doteat+1;
 scoretext.setText('Puntos ' + score);
 console.log (score);
}};