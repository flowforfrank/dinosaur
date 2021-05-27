const state = {
    pressToPlay: document.querySelector('.press-to-play'),
    gameOver: document.querySelector('.game-over')
}

export const showPressToPlay = () => state.pressToPlay.classList.remove('hidden');
export const hidePressToPlay = () => state.pressToPlay.classList.add('hidden');

export const showGameOver = () => state.gameOver.classList.remove('hidden');
export const hideGameOver = () => state.gameOver.classList.add('hidden');