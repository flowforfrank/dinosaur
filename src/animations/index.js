export default scene => {
    scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNames('atlas', {
            prefix: 'atlas_',
            start: 1,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'idle',
        frames: [{ key: 'atlas', frame: 'atlas_0' }],
        frameRate: 10
    });
};