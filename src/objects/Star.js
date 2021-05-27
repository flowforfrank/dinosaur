class Star {
    constructor(scene) {
        const randomSprite = Math.floor(Math.random() * 2);
        const randomXPosition = Math.floor(Math.random() * 620) + 20;
        const randomYPosition = Math.floor(Math.random() * 400) + 20;

        this.sprite = scene.physics.add.staticSprite(randomXPosition, randomYPosition, 'tiles', randomSprite)
            .setScale(2);
    }
}

export default Star;