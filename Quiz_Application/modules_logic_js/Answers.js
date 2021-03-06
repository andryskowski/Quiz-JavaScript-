class Answers {
    constructor() {
        this.answersList = [];
        this.answersListIsTrue = [];
        this.getAnswersList = () => this.answersList;
        this.addAnswerToList = (answer) => {
            if (!answer) {
                throw new Error("Answer needed!");
            }
            this.answersList.push(answer);
        }
        this.addAnswerToListIfTrue = (answer) => {
            // if (answer === false) {
            //     throw new Error("Answer is not true!");
            // }
            this.answersListIsTrue.push(answer);
        }
        this.countCorrectAnswers()
    }
    countCorrectAnswers() {
        let counter=0;
        this.answersListIsTrue.forEach((answer) => {
            if (answer == false) {
                throw new Error("Answer is not true!");
            }
            if(answer == true){    
                counter=counter+1;
            }
        })
        return counter;
    }

}


//module.exports especially for tests
// module.exports = Answers;

