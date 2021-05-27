const score = {
    container: document.querySelector('.score'),
    current: document.querySelector('.current-score'),
    best: document.querySelector('.highscore')
}

export const showScore = () => score.container.classList.remove('hidden');
export const hideScore = () => score.container.classList.add('hidden');
export const showHighScore = () => score.best.classList.remove('hidden');

export const setHighScore = state => {
    state.highScore = state.score;
    score.best.innerText = `HI ${state.score.toString().padStart(6, '0')}`;
};

export const updateScore = state => {
    const currentScore = Number(score.current.innerText);

    state.score = currentScore + 1;
    score.current.innerText = (currentScore + 1).toString().padStart(6, '0');
};

export const resetScore = state => {
    state.score = 0;
    score.current.innerText = '000000';
}