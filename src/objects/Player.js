import { 
    updateScore, 
    showHighScore, 
    setHighScore
} from '../ui/score'

import { showGameOver } from '../ui/gameState'

class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.timer = 0;

        this.sprite = scene.physics.add.sprite(x, y, 'atlas')
            .setScale(2)
            .setImmovable()
            .setCollideWorldBounds();

        this.isDead = false;

        return this;
    }

    update(input, delta) {
        this.timer += delta;

        if (!this.isDead && this.sprite.body.onFloor()) {
            this.sprite.play('run', true);
        }

        if ((input.space.isDown && this.sprite.body.onFloor())) {
            this.sprite.setVelocityY(-500);
            this.sprite.play('idle', true);
        }

        if (this.timer > 100 / this.scene.state.speed) {
            this.timer = 0;
            updateScore(this.scene.state);
        }
    }

    die() {
        this.isDead = true;
        this.sprite.play('idle', true);

        this.scene.state.started = false;
        this.scene.state.gameOver = true;

        if (this.scene.state.score > this.scene.state.highScore) {
            setHighScore(this.scene.state);
        }
        
        showHighScore();
        showGameOver();
    }
}

export default Player;