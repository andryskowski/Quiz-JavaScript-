class Result{
    constructor(){
        this.BOARD = document.querySelector('.questionDIV');

        this.setResult = () => {
            this.BOARD.innerHTML = '<h1>Koniec testu!</h1>';
            this.BOARD.innerHTML = `<p>Twój rezultat to ${ANSWERS.countCorrectAnswers()} 
            prawidłowych odpowiedzi na ${QUESTION.questionsQuantity} pytania.</p>`;
        }
    }
    
}