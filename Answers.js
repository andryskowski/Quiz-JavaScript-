class Answers {
    constructor() {
        this.answersList = [];
        this.answersListIsTrue = [];
        this.getAnswersList = () => this.answersList;
        this.addAnswerToList = (answer) => {
            this.answersList.push(answer);
        }
        this.addAnswerToListIsTrue = (answer) => {
            this.answersListIsTrue.push(answer);
        }
        this.countCorrectAnswers()
    }

    countCorrectAnswers() {
        let counter=0;
        this.answersListIsTrue.forEach((answer) => {
            if(answer === true){
                counter=counter+1;
            }
        })
        return counter;
    }

}