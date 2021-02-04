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

        //buttons for LifeLines
        this.buttonll1 = document.createElement("button");
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll1);
        this.buttonll1.className = "buttonOnGame";
        this.buttonll2 = document.createElement("button");
        this.buttonll2.className = "buttonOnGame";
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll2);
        this.buttonll3 = document.createElement("button");
        this.buttonll3.className = "buttonOnGame";
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll3);


        //Popup where lifelines are displayed
        this.POPUP = document.createElement("div");
        document.body.appendChild(this.POPUP);
        

        this.drawButtonsLifeLines();





        this.setDraw = () => {
            this.POPUP.innerHTML = ``;
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
            this.resetColorsAnswers();
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

    resetColorsAnswers() {
        this.answerA.classList.remove(`fiftyFifty`);
        this.answerB.classList.remove(`fiftyFifty`);
        this.answerC.classList.remove(`fiftyFifty`);
        this.answerD.classList.remove(`fiftyFifty`);
    }

    cleanBoard() {
        this.BOARD.innerHTML = '';
    }

    showResults() {
        this.BOARD.innerHTML = '<h1>ELO ZAKOŃCZYŁEŚ TEST</h1>';
        this.BOARD.innerHTML += '<h2>Twoje rezultaty to:</h2>';
        this.BOARD.innerHTML += ANSWERS.getAnswersList();
    }

    drawResult() {

    }

    drawButtonsLifeLines() {

        this.buttonll1.innerHTML = "FiftyFifty";
        this.buttonll1.addEventListener("click", () => this.drawLifeLinePopUp("FiftyFifty"));

        this.buttonll2.innerHTML = "AskTheAudience";
        this.buttonll2.addEventListener("click", () => this.drawLifeLinePopUp("AskTheAudience"));

        this.buttonll3.innerHTML = "Phone A Friend";
        this.buttonll3.addEventListener("click", () => this.drawLifeLinePopUp("PhoneAFriend"));
    }



    drawLifeLinePopUp(LIFELINE_NAME) {
        this.POPUP.className = "popup";
        this.POPUP.style.display = `block`;

        //FiftyFifty LifeLines
        if (LIFELINE_NAME == "FiftyFifty") {


            const FIFTYFIFTY = new FiftyFifty(true);
            this.POPUP.innerHTML = `Koło ratunkowe wybrane przez ciebie to ` + FIFTYFIFTY.getName();
            // FIFTYFIFTY.algorithmFiftyFifty(QUESTION.getAnswerTrue());

            const SHUFFLED_LIST_INCORRECT_ANSWERS = FIFTYFIFTY.algorithmFiftyFifty();
            if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "B")
                this.answerB.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "C")
                this.answerC.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "D")
                this.answerD.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "A")
                this.answerA.className = `fiftyFifty`;

            if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "B")
                this.answerB.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "C")
                this.answerC.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "D")
                this.answerD.className = `fiftyFifty`;
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "A")
                this.answerA.className = `fiftyFifty`;

            this.buttonll1.innerHTML = "wykorzystany";
        }

        else if (LIFELINE_NAME == "AskTheAudience") {
            const ASK_THE_AUDIENCE = new AskTheAudience(true);
            this.POPUP.innerHTML = `Koło ratunkowe wybrane przez ciebie to ` + ASK_THE_AUDIENCE.getName();


            const LIST_PERCENTS = ASK_THE_AUDIENCE.algorithmAskTheAudience();
            const MAX_PERCENT = Math.max(...LIST_PERCENTS)

            const PERCENT_A = document.createElement("div");
            this.POPUP.appendChild(PERCENT_A);
            PERCENT_A.className = `percent`;

            const PERCENT_B = document.createElement("div");
            this.POPUP.appendChild(PERCENT_B);
            PERCENT_B.className = `percent`;

            const PERCENT_C = document.createElement("div");
            this.POPUP.appendChild(PERCENT_C);
            PERCENT_C.className = `percent`;

            const PERCENT_D = document.createElement("div");
            this.POPUP.appendChild(PERCENT_D);
            PERCENT_D.className = `percent`;

            if (QUESTION.getAnswerTrue() == "A") {
                PERCENT_A.innerHTML = `${MAX_PERCENT}%`;
                PERCENT_A.style.width = `${MAX_PERCENT}%`;

                PERCENT_B.innerHTML = `${LIST_PERCENTS[1]}%`;
                PERCENT_B.style.width = `${LIST_PERCENTS[1]}%`;

                PERCENT_C.innerHTML = `${LIST_PERCENTS[2]}%`;
                PERCENT_C.style.width = `${LIST_PERCENTS[2]}%`;

                PERCENT_D.innerHTML = `${LIST_PERCENTS[3]}%`;
                PERCENT_D.style.width = `${LIST_PERCENTS[3]}%`;
            }
            else if (QUESTION.getAnswerTrue() == "B") {
                PERCENT_B.innerHTML = `${MAX_PERCENT}%`;
                PERCENT_B.style.width = `${MAX_PERCENT}%`;

                PERCENT_A.innerHTML = `${LIST_PERCENTS[1]}%`;
                PERCENT_A.style.width = `${LIST_PERCENTS[1]}%`;

                PERCENT_C.innerHTML = `${LIST_PERCENTS[2]}%`;
                PERCENT_C.style.width = `${LIST_PERCENTS[2]}%`;

                PERCENT_D.innerHTML = `${LIST_PERCENTS[3]}%`;
                PERCENT_D.style.width = `${LIST_PERCENTS[3]}%`;
            }
            else if (QUESTION.getAnswerTrue() == "C") {
                PERCENT_C.innerHTML = `${MAX_PERCENT}%`;
                PERCENT_C.style.width = `${MAX_PERCENT}%`;

                PERCENT_B.innerHTML = `${LIST_PERCENTS[1]}%`;
                PERCENT_B.style.width = `${LIST_PERCENTS[1]}%`;

                PERCENT_A.innerHTML = `${LIST_PERCENTS[2]}%`;
                PERCENT_A.style.width = `${LIST_PERCENTS[2]}%`;

                PERCENT_D.innerHTML = `${LIST_PERCENTS[3]}%`;
                PERCENT_D.style.width = `${LIST_PERCENTS[3]}%`;
            }
            else if (QUESTION.getAnswerTrue() == "D") {
                PERCENT_D.innerHTML = `${MAX_PERCENT}%`;
                PERCENT_D.style.width = `${MAX_PERCENT}%`;

                PERCENT_B.innerHTML = `${LIST_PERCENTS[1]}%`;
                PERCENT_B.style.width = `${LIST_PERCENTS[1]}%`;

                PERCENT_C.innerHTML = `${LIST_PERCENTS[2]}%`;
                PERCENT_C.style.width = `${LIST_PERCENTS[2]}%`;

                PERCENT_A.innerHTML = `${LIST_PERCENTS[3]}%`;
                PERCENT_A.style.width = `${LIST_PERCENTS[3]}%`;
            }
        }
        else if (LIFELINE_NAME == "PhoneAFriend") {
            const PHONE_A_FRIEND = new PhoneAFriend(true);
            this.POPUP.innerHTML = `Koło ratunkowe wybrane przez ciebie to ` + PHONE_A_FRIEND.getName();
            const ANSWER_FROM_FRIEND = PHONE_A_FRIEND.algorithmPhoneAFriend();
            this.POPUP.innerHTML += ` Według niego prawidłowa odpowiedź to odpowiedź ${ANSWER_FROM_FRIEND}.`
        }

                //'x' for popup
                const X_POPUP = document.createElement("div");
                this.POPUP.appendChild(X_POPUP);
                X_POPUP.innerHTML = `x`;
                X_POPUP.className = `xPopup`;
                X_POPUP.addEventListener("click", (e) => { this.POPUP.style.display = `none` });

    }


}



const draw = new Draw();
const ANSWERS = new Answers();