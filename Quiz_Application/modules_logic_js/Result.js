class Result {
    constructor() {
        this.BOARD_AFTER_GAME = document.createElement("div");
        this.BOARD_AFTER_GAME.classList.add(`boardAfterGame`);
        this.BOARD = document.querySelector('.bgQuestion').appendChild(this.BOARD_AFTER_GAME);

        this.actualState = 'inProgress';
        this.getActualState = () => this.actualState;
        this.setActualState = (_newState) => this.actualState = _newState;

        this.setResult = () => {
            DRAW.cleanBoard();

            if (this.getActualState() == `victory`) {
                this.BOARD.innerHTML = `<p class="pAfterGiveUp">Congratulations, you are a millionaire !!</p> <i class="fas fa-trophy"></i>`;
            }
            else if (this.getActualState() === 'inProgress') {
                console.log('Game in progress');
            }
            else if (this.getActualState() === 'giveUp') {
                if (REWARD.getActualReward() >= 500) {
                    this.BOARD.innerHTML = `<p class="pAfterGiveUp">Your reward is: ${REWARD.getActualReward()}$. Thank you for playing. You can try again!</p> `;
                }
                else {
                    this.BOARD.innerHTML = ` <p class="pAfterGiveUp">Your reward is: ${0}$. Thank you for playing. You can try again!</p> <i class="fas fa-sad-tear"></i>`;
                }
            }
            else if (this.getActualState() === 'wrongAnswer') {
                this.BOARD.innerHTML = `<p class="pAfterGiveUp">Unfortunately, this is the wrong answer. Your guaranteed reward is: ${REWARD.getGuaranteedReward()}$.Thank you for playing. You can try again!</p> <i class="fas fa-sad-tear"></i>`;
            }
            const PLAY_AGAIN = document.createElement("button");
            PLAY_AGAIN.classList.add(`buttonPlayAgain`);
            PLAY_AGAIN.innerHTML = "PLAY AGAIN";
            this.BOARD_AFTER_GAME.appendChild(PLAY_AGAIN);
            PLAY_AGAIN.addEventListener("click", () => { window.location.reload(true); });


        }
    }

}