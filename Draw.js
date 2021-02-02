class Draw {

    constructor() {
        this.button = document.querySelector('button');
        this.button.innerHTML = 'Zatwierdź';
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
        this.counter = 0;
        this.changeQuestion();
        this.isCorrect = false;
        this.answerA = document.querySelector('.questionDIV span.A');
        this.answerB = document.querySelector('.questionDIV span.B');
        this.answerC = document.querySelector('.questionDIV span.C');
        this.answerD = document.querySelector('.questionDIV span.D');
        this.BOARD = document.querySelector('.questionDIV');
        // this.fiftyFifty = document.querySelector('#fiftyfifty');
        // this.fiftyFiftyOnChange();

        this.buttonll1 = document.createElement("button");
        document.body.appendChild(this.buttonll1);
        this.drawButtonsLifeLines();


        this.setDraw = () => {
            this.answerA.style.color = "black";
            this.answerB.style.color = "black";
            this.answerC.style.color = "black";
            this.answerD.style.color = "black";
            this.question = document.querySelector('.questionDIV p.question');
            this.question.innerHTML = QUESTION.getQuestion();
            this.answerA.innerHTML = `A.` + QUESTION.getAnswerA();
            this.answerB.innerHTML = `B.` + QUESTION.getAnswerB();
            this.answerC.innerHTML = `C.` + QUESTION.getAnswerC();
            this.answerD.innerHTML = `D.` + QUESTION.getAnswerD();
        }

        this.answerA.addEventListener("click", (e) => {
            e.target.classList.toggle('checkedAnswer');
            this.checkAnswer('A');
            this.answerB.classList.remove('checkedAnswer');
            this.answerC.classList.remove('checkedAnswer');
            this.answerD.classList.remove('checkedAnswer');
        });

        this.answerB.addEventListener("click", (e) => {
            e.target.classList.toggle('checkedAnswer');
            this.checkAnswer('B');
            this.answerA.classList.remove('checkedAnswer');
            this.answerC.classList.remove('checkedAnswer');
            this.answerD.classList.remove('checkedAnswer');
        });

        this.answerC.addEventListener("click", (e) => {
            e.target.classList.toggle('checkedAnswer');
            this.checkAnswer('C');
            this.answerA.classList.remove('checkedAnswer');
            this.answerB.classList.remove('checkedAnswer');
            this.answerD.classList.remove('checkedAnswer');
        });

        this.answerD.addEventListener("click", (e) => {
            e.target.classList.toggle('checkedAnswer');
            this.checkAnswer('D');
            this.answerA.classList.remove('checkedAnswer');
            this.answerB.classList.remove('checkedAnswer');
            this.answerC.classList.remove('checkedAnswer');
        });
    }

    checkAnswer(checkedAnswer) {
        QUESTION.setMarkedAnswer(checkedAnswer);
        console.log(QUESTION.getMarkedAnswer());
        if (checkedAnswer === QUESTION.getAnswerTrue()) {
            alert('Prawidłowa odpowiedź!');
            this.isCorrect = true;
        }
        else {
            alert('Nieprawidłowa odpowiedź! :(');
            this.isCorrect = false;
        }
    }

    changeQuestion() {
        // const button = document.querySelector('button');
        this.button.addEventListener("click", () => {
            console.log(QUESTION.questionsQuantity, this.counter);
            if ((QUESTION.questionsQuantity - 1) > this.counter) {
                QUESTION.setQuestionID(this.counter += 1);
                draw.setDraw();
                this.answerA.classList.remove('checkedAnswer');
                this.answerB.classList.remove('checkedAnswer');
                this.answerC.classList.remove('checkedAnswer');
                this.answerD.classList.remove('checkedAnswer');
                ANSWERS.addAnswerToList(QUESTION.getMarkedAnswer());
                ANSWERS.addAnswerToListIsTrue(this.isCorrect);
            }
            else if ((QUESTION.questionsQuantity - 1) === this.counter) {
                ANSWERS.addAnswerToList(QUESTION.getMarkedAnswer());
                ANSWERS.addAnswerToListIsTrue(this.isCorrect);
                this.button.innerHTML = 'Zakończ test';
                this.cleanBoard();
                const RESULT = new Result();
                RESULT.setResult();
            }
        });
    }

    cleanBoard() {
        this.BOARD.innerHTML = '';
    }

    showResults() {
        this.BOARD.innerHTML = '<h1>ELO ZAKOŃCZYŁEŚ TEST</h1>';
        this.BOARD.innerHTML += '<h2>Twoje rezultaty to:</h2>';
        this.BOARD.innerHTML += ANSWERS.getAnswersList();
    }

    // fiftyFiftyOnChange(){
    //     this.fiftyFifty.addEventListener("click", () => {console.log('elo')});
    // }

    // addAnswerToList() {
    //     console.log(QUESTION.getMarkedAnswer());
    // }

    drawResult() {



        // document.querySelector('.question span.A').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
        // this.isAnswerTrue()} )
        // document.querySelector('.question span.B').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
        // document.querySelector('.question span.C').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
        // document.querySelector('.question span.D').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
        // document.querySelector('.question span.A').classList.toggle('.checkedAnswer')

    }

    drawButtonsLifeLines() {
        this.buttonll1.innerHTML = "FiftyFifty";
        this.buttonll1.addEventListener("click", () => this.drawLifeLinePopUp("FiftyFifty"));


    }



    drawLifeLinePopUp(LIFELINE_NAME) {
        const POPUP = document.createElement("div");
        document.body.appendChild(POPUP);
        POPUP.innerHTML = "Koło ratunkowe wybrane przez ciebie to: ";
        POPUP.className = "popup";

        if (LIFELINE_NAME == "FiftyFifty") {
            const FIFTYFIFTY = new FiftyFifty(true);
            POPUP.innerHTML += FIFTYFIFTY.getName();
            // FIFTYFIFTY.algorithmFiftyFifty(QUESTION.getAnswerTrue());

            const SHUFFLED_LIST_INCORRECT_ANSWERS = FIFTYFIFTY.algorithmFiftyFifty();
            if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "B")
                this.answerB.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "C")
                this.answerC.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "D")
                this.answerD.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "A")
                this.answerA.style.color = "gray";

            if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "B")
                this.answerB.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "C")
                this.answerC.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "D")
                this.answerD.style.color = "gray";
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "A")
                this.answerA.style.color = "gray";

                this.buttonll1.innerHTML="wykorzystany";
        }

    }


}



const draw = new Draw();

draw.setDraw();
const ANSWERS = new Answers();
