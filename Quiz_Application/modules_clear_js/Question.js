//let questions which can be used when connection with DB doesn't work
// let questions = [
//     {
//         idQuestion: 0,
//         question: 'Twoje ulubione jedzenie to?',
//         A: 'sojowa parówka',
//         B: 'mięsna parówka',
//         C: 'bułka kajzerka',
//         D: 'ziemniaczek',
//         trueAnswer: 'A'
//     }
// ]

class Question {
    constructor(id) {
        let _id = id;
        let _newid;
        this.quests = [];

        fetch("http://localhost:3000/questionsdb")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const SHUFFLED_RESPONSE = this.shuffle(response);
                for(let i = 0; i<12; i++) {
                 this.quests.push(SHUFFLED_RESPONSE[i]);
                }
                this.questionsQuantity = this.quests.length;
                DRAW.setDraw()
            })

        this.getQuestionQuantity = () => this.questionsQuantity;
        this.getQuestionID = () => _id;
        this.setQuestionID = (_newid) => _id = _newid;
        //other than a, b,c,d
        this.markedAnswer = 'E';
        this.setMarkedAnswer = (_newMarkedAnswer) => this.markedAnswer = _newMarkedAnswer;
        this.getMarkedAnswer = () => this.markedAnswer;

        this.getQuestion = () => {
            return this.quests[_id].question;
        }

        this.getAnswerA = () => {
            return this.quests[_id].A;
        }

        this.getAnswerB = () => {
            return this.quests[_id].B;
        }

        this.getAnswerC = () => {
            return this.quests[_id].C;
        }

        this.getAnswerD = () => {
            return this.quests[_id].D;
        }

        this.getAnswerTrue = () => {
            return this.quests[_id].TrueAnswer;
        }

    }

    //method to shuffle questions taken from DB (used in method fetch which is on top this class)
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const J = Math.floor(Math.random() * (i + 1));
            [a[i], a[J]] = [a[J], a[i]];
        }
        return a;
    }
}

const QUESTION = new Question(0);
