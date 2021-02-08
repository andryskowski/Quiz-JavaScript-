class Result{
    constructor(){
        this.BOARD = document.querySelector('.questionDIV');


        this.actualState = 'inProgress';
        this.getActualState = () =>  this.actualState;
        this.setActualState = (_newState) => this.actualState = _newState;

        this.setResult = () => {
            draw.cleanBoard();
            if(this.getActualState() == `victory`){
            this.BOARD.innerHTML = `<p>Gratulacje, wygrałeś milion!! Twój rezultat to ${ANSWERS.countCorrectAnswers()} 
            prawidłowych odpowiedzi na ${QUESTION.questionsQuantity} pytania.</p>`;
            }
            else if (this.getActualState() === 'inProgress')
            {
                console.log('Game in progress');
            }
            else if (this.getActualState() === 'giveUp')
            {
                console.log('give up');
            }
            else if (this.getActualState() === 'wrongAnswer')
            {
                this.BOARD.innerHTML = `<p>Niestety, ale odpowiedz jest nieprawidlowa. Twoja gwarantowana nagroda to: ${REWARD.getGuaranteedReward()}$.</p>`;
            }
        }
    }
    
}