class Enemigos extends Phaser.Physics.Arcade.Sprite{

    constructor(config){
        super(config.scene, config.texture, config.sprite)
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        this.scene.events.on('update', this.update , this);
        pacmanmalo = config.scene.physics.add.sprite(32, 32, 'todo', 'pacman01').setOrigin(0, 0).setSize(25,25).setTint(0xF00909);
        pacmanmalo2 = config.scene.physics.add.sprite(544, 544, 'todo', 'pacman01').setOrigin(0, 0).setSize(25,25).setTint(0x49FF00);
        pacmanmalo3 = config.scene.physics.add.sprite(544, 32, 'todo', 'pacman01').setOrigin(0, 0).setSize(25,25).setTint(0xFF8B00);
      
        
    }


 
    
   
update(){
    if(cursor_a.isDown){
      pacmanmalo3.setVelocityX(mvelocidad);
      }else if(cursor_d.isDown){
          pacmanmalo3.setVelocityX(velocidad);
      }else if(cursor_w.isDown){
             pacmanmalo3.setVelocityY(mvelocidad); 
          }
          else if(cursor_s.isDown){
              pacmanmalo3.setVelocityY(velocidad);
          }
          else{
              pacmanmalo3.setVelocityX(0);
              pacmanmalo3.setVelocityY(50);
  } 
  {
    if(cursor_a.isDown){
      pacmanmalo.setVelocityX(velocidad);
      }else if(cursor_d.isDown){
          pacmanmalo.setVelocityX(mvelocidad);
      }else if(cursor_w.isDown){
             pacmanmalo.setVelocityY(velocidad); 
          }
          else if(cursor_s.isDown){
              pacmanmalo.setVelocityY(mvelocidad);
          }
          else{
              pacmanmalo.setVelocityX(50);
              pacmanmalo.setVelocityY(0);
  } 
  {
    if(cursor_a.isDown){
      pacmanmalo2.setVelocityX(velocidad);
      }else if(cursor_d.isDown){
          pacmanmalo2.setVelocityX(mvelocidad);
      }else if(cursor_w.isDown){
             pacmanmalo2.setVelocityY(mvelocidad); 
          }
          else if(cursor_s.isDown){
              pacmanmalo2.setVelocityY(velocidad);
          }}}}};