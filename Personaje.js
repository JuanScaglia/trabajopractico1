class Personaje extends Phaser.Physics.Arcade.Sprite{

    constructor(config){
        super(config.scene, config.x, config.y, config.texture, config.sprite)
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        this.scene.events.on('update', this.update , this);
    
    }
update(){
    if(cursor_a.isDown){
        pacman.setVelocityX(-250);
        }else if(cursor_d.isDown){
            pacman.setVelocityX(250);
        }else if(cursor_w.isDown){
               pacman.setVelocityY(-250); 
            }
            else if(cursor_s.isDown){
                pacman.setVelocityY(250);
            }
            else{
                pacman.setVelocityX(0);
                pacman.setVelocityY(0);
    }   
}
};