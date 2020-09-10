class Scene3 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    preload(){
        this.load.image('boton1', 'assets/mapa1.png');
        this.load.image('boton2', 'assets/mapa2.png');
        this.load.image('logo', 'assets/logo.png');
    };

    create(){
        var graphics = this.add.graphics();

    this.tweens.addCounter({
        from: 0,
        to: 30,
        duration: 200,
        yoyo: true,
        repeat: -1,
        onUpdate: function (tween)
        {
            var t = tween.getValue();

            graphics.clear();
            graphics.fillStyle(0xffffff, 1);
            graphics.fillCircle(450, 300, 15);
            graphics.fillCircle(510, 300, 15);
            graphics.fillCircle(570, 300, 15);

            graphics.fillStyle(0xffff00, 1);
            graphics.slice(260, 300, 150, Phaser.Math.DegToRad(330 + t), Phaser.Math.DegToRad(30 - t), true);
            graphics.fillPath();

            graphics.fillStyle(0x000000, 1);
            graphics.fillEllipse(260, 200, 30, 50);

          
        }
    });
        this.add.image(300, 520, 'boton1').setInteractive().on('pointerdown', () => this.level1() );
        this.add.image(300,570, 'boton2').setInteractive().on('pointerdown', () => this.level2() );
        this.add.image(310,80, 'logo');
        this.add.text(150,455, 'Para jugar utilizá W,A,S,D. ', {fontSize: 20}).setTint(0xffffff).setAlpha(0.8);
    };

    level1(){
       
        this.scene.start('level1');
      }
    

    level2(){
       
          this.scene.start('level2');
        }
      }