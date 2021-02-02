let questions = [
    {
    idQuestion: 0,
    question: 'Twoje ulubione jedzenie to?',
    A: 'sojowa parówka',
    B: 'mięsna parówka',
    C: 'bułka kajzerka',
    D: 'ziemniaczek',
    trueAnswer: 'A'
 },
 {
    idQuestion: 1,
    question: 'Jerzy Brzeczek jest trenerem?',
    A: 'koszykowki',
    B: 'pilki noznej',
    C: 'golfa',
    D: 'siatkowki',
    trueAnswer: 'B'
 },
 {
    idQuestion: 2,
    question: 'Smalec robi sie z?',
    A: 'z krowy',
    B: 'z osla',
    C: 'z psa',
    D: 'ze swini',
    trueAnswer: 'D'
 }

]
 


class Question {
    constructor(id) {
        let _id = id;
        let _newid;
        let quests = [...questions]
        this.getQuestionID = () => _id;
        this.setQuestionID = (_newid) => _id = _newid;
        this.questionsQuantity = quests.length;
        this.markedAnswer = 'E';

        this.setMarkedAnswer = (_newMarkedAnswer) => this.markedAnswer = _newMarkedAnswer;
        this.getMarkedAnswer = () => this.markedAnswer;

        this.getQuestion = () => {
            return quests[_id].question;
        }

        this.getAnswerA = () => {
            return quests[_id].A;
        }

        this.getAnswerB = () => {
            return quests[_id].B;
        }

        this.getAnswerC = () => {
            return quests[_id].C;
        }

        this.getAnswerD = () => {
            return quests[_id].D;
        }

        this.getAnswerTrue = () => {
            return quests[_id].trueAnswer;
        }
    }
}

const QUESTION = new Question(0);
