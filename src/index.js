import Phaser from 'phaser';
import Scene01 from './scenes/Scene01';

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 320,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [ Scene01 ],
}

const game = new Phaser.Game(config);
