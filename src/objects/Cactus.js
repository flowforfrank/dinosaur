class Cactus {
    constructor(scene) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(700, 470, 'tiles', 2)
            .setScale(2)
            .setSize(5, 15)
            .setCollideWorldBounds(true);

        this.sprite.body.customBoundsRectangle.left = -100;
        this.sprite.body.customBoundsRectangle.right = 740;

        this.collider = scene.physics.add.collider(scene.player.sprite, this.sprite, this.gameOver, null, this);
        this.update();
    }

    update() {
        this.sprite.setVelocityX(-150 * this.scene.state.speed);
    }

    stop() {
        this.sprite.setVelocityX(0);
    }

    gameOver() {
        this.scene.player.die();
    }
}

export default Cactus;