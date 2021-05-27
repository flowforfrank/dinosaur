import Phaser from 'Phaser'
import Dino from './dino.js'

const config = {
    width: 640,
    height: 480,
    parent: 'dino',
    backgroundColor: '#202124',
    title: 'Dino',
    url: 'webtips.dev',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true, set debug to true if you want collision boxes to be drawn
            gravity: {
                y: 1000
            }
        }
    },
    scene: [
        Dino
    ]
};

new Phaser.Game(config);