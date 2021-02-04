

let questions = [
    {
        idQuestion: 0,
        question: 'Twoje ulubione jedzenie to?',
        A: 'sojowa parówka',
        B: 'mięsna parówka',
        C: 'bułka kajzerka',
        D: 'ziemniaczek',
        trueAnswer: 'A'
    }
]




class Question {
    constructor(id) {
        let _id = id;
        let _newid;
        // let quests = [...questions];
        // this.isLoaded = false;
        this.quests = [];

        // this.getObjectsDB = () => {
        fetch("http://localhost:3000/questionsdb")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.quests = response;
                // this.isLoaded = true;
                this.questionsQuantity = this.quests.length;
                draw.setDraw()
            })
        // }

        this.getQuestionID = () => _id;
        this.setQuestionID = (_newid) => _id = _newid;


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



        // this.getIsLoaded = () => {
        //     return this.isLoaded;
        // }



    }
}

const QUESTION = new Question(0);
