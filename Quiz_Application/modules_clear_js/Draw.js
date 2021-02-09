class Draw {

    constructor() {
        

        //button do zmiany pytania
        this.buttonConfirmQuestion = document.createElement(`button`);
        this.buttonConfirmQuestion.innerHTML = 'Next question';
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonConfirmQuestion);
        this.buttonConfirmQuestion.className = "buttonOnGame";

        this.getDrawResult = () => _result;

        //counter do zmieniania pytań
        this.counter = 0;
        this.changeQuestion();

        //czy odpowiedz jest prawidlowa
        this.isCorrect = false;

        //stan rozgrywki
        this.RESULT = new Result();
        this.actualState = this.RESULT.getActualState();

        //pobranie elementow gdzie beda wstawione odpowiedzi
        this.answerA = document.querySelector('.questionDIV span.A');
        this.answerB = document.querySelector('.questionDIV span.B');
        this.answerC = document.querySelector('.questionDIV span.C');
        this.answerD = document.querySelector('.questionDIV span.D');
        this.BOARD = document.querySelector('.questionDIV');

        //buttony do dokumentu
        this.buttonll1 = document.createElement("button");
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll1);
        this.buttonll1.className = "buttonOnGame";
        this.buttonll1IsUsed = true;

        this.buttonll2 = document.createElement("button");
        this.buttonll2.className = "buttonOnGame";
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll2);
        this.buttonll2IsUsed = true;

        this.buttonll3 = document.createElement("button");
        this.buttonll3.className = "buttonOnGame";
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonll3);
        this.buttonll3IsUsed = true;

        //zrezygnuj
        this.buttonGiveUp = document.createElement("button");
        this.buttonGiveUp.className = "buttonOnGame";
        this.buttonGiveUp.innerHTML = 'Give up';
        document.querySelector(`.lifeLinesAndNext`).appendChild(this.buttonGiveUp);
        this.drawButtonGiveUp();

        //Popup where lifelines are displayed
        this.POPUP = document.createElement("div");
        document.body.appendChild(this.POPUP);
        this.drawButtonsLifeLines();

        //Reward

        this.showReward();

        this.setDraw = () => {
            this.POPUP.innerHTML = ``;
            this.question = document.querySelector('.pQuestion');
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

    showReward() {
        this.rewardInfo = document.querySelector(`.reward`);
        this.rewardInfo.classList.add(`reward`);
        this.ol = document.createElement("ol");
        this.rewardInfo.appendChild(this.ol);
        this.ol.className = `orderedList`;
        const LEVELS = REWARD.getLevels();
        LEVELS.forEach((element, index) => {
            const ELEMENT_LIST = document.createElement(`li`);
            ELEMENT_LIST.innerHTML = `${element}`;
            ELEMENT_LIST.className = `${index}`;
            this.ol.appendChild(ELEMENT_LIST);
        });
        document.querySelector(`.orderedList li:nth-child(${REWARD.getActualLevel()})`).className = `actualLevel`;
        //gwarantowane 1000 i 40000 pln
        document.querySelector(`.orderedList li:nth-child(11)`).className = `guaranteed`;
        document.querySelector(`.orderedList li:nth-child(6)`).className = `guaranteed`;
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
        this.buttonConfirmQuestion.addEventListener("click", () => {
            
            this.changePresenterImg();
            //jesli jest rowny 1 to jest wygrana
            if (REWARD.getActualLevel() > 1) {
                this.changeRewardElement()
                if (REWARD.getActualLevel() == 10) {
                    const ACTUAL_GUARANTEED_REWARD = 400;
                    REWARD.setGuaranteedReward(ACTUAL_GUARANTEED_REWARD);
                }
                else if (REWARD.getActualLevel() == 5) {
                    const ACTUAL_GUARANTEED_REWARD = 40000;
                    REWARD.setGuaranteedReward(ACTUAL_GUARANTEED_REWARD);
                }
            }


            this.resetColorsAnswers();
            //jesli jeszcze nie ma ostatniego pytania
            if ((QUESTION.getQuestionQuantity() - 1) > this.counter) {
                QUESTION.setQuestionID(this.counter += 1);

                draw.setDraw();

                this.answerA.classList.remove('checkedAnswer');
                this.answerB.classList.remove('checkedAnswer');
                this.answerC.classList.remove('checkedAnswer');
                this.answerD.classList.remove('checkedAnswer');
                ANSWERS.addAnswerToList(QUESTION.getMarkedAnswer());

                ANSWERS.addAnswerToListIsTrue(this.isCorrect);

            }
            //jesli zatwierdzi się wszystkie pytania
            else if ((QUESTION.getQuestionQuantity() - 1) === this.counter) {
                console.log('tu')
                ANSWERS.addAnswerToList(QUESTION.getMarkedAnswer());
                ANSWERS.addAnswerToListIsTrue(this.isCorrect);
                if (this.isCorrect == true) {
                    this.RESULT.setActualState('victory');
                    this.RESULT.setResult();
                }
            }

            if (this.isCorrect == false) {
                this.RESULT.setActualState('wrongAnswer');
                this.RESULT.setResult();
            }
            this.isCorrect = false;
            this.drawAnimationAfterTrueAnswer();
        });
 
    }

    changeRewardElement() {

        document.querySelector(`.orderedList li:nth-child(${REWARD.getActualLevel()})`).classList.remove(`actualLevel`);
        REWARD.setActualLevel(REWARD.getActualLevel() - 1);
        document.querySelector(`.orderedList li:nth-child(${REWARD.getActualLevel()})`).classList.add(`actualLevel`);

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


    drawButtonGiveUp() {
        this.buttonGiveUp.addEventListener("click", () => {
        this.RESULT.setActualState('giveUp')
        this.RESULT.setResult();
    });
        
    }

    drawButtonsLifeLines() {

        this.buttonll1.innerHTML = "50/50";
        this.buttonll1.addEventListener("click", () => this.drawLifeLinePopUp("FiftyFifty"));

        this.buttonll2.innerHTML = "Ask The Audience";
        this.buttonll2.addEventListener("click", () => this.drawLifeLinePopUp("AskTheAudience"));

        this.buttonll3.innerHTML = "Phone A Friend";
        this.buttonll3.addEventListener("click", () => this.drawLifeLinePopUp("PhoneAFriend"));
    }

    changePresenterImg() {
        document.querySelector(`.imgPresenter`).style.backgroundImage = "url('img/hubert_2.png')";
        setTimeout(function(){ document.querySelector(`.imgPresenter`).style.backgroundImage = "url('img/hubert.png')"; }, 1000);
    }

    drawAnimationAfterTrueAnswer(){
        // const DIV_QUESTION = document.querySelector(`.question`);
        const ACTUAL_REWARD = document.createElement("h1");
        ACTUAL_REWARD.innerHTML = `${REWARD.getActualReward()}$`;
        ACTUAL_REWARD.classList.add(`animatedReward`);
        document.querySelector(`.question`).appendChild(ACTUAL_REWARD);
        setTimeout(function(){ document.querySelector(`.question`).removeChild(ACTUAL_REWARD); }, 2500);


        // const PERCENT_A = document.createElement("div");
        //     this.POPUP.appendChild(PERCENT_A);
        //     PERCENT_A.className = `percent`;
    }


    drawLifeLinePopUp(LIFELINE_NAME) {


        //FiftyFifty LifeLines
        if (LIFELINE_NAME == "FiftyFifty" && this.buttonll1IsUsed == true) {
            this.POPUP.className = "popup";
            this.POPUP.style.display = `block`;

            const FIFTYFIFTY = new FiftyFifty(true);
            this.POPUP.innerHTML = `Koło ratunkowe wybrane przez ciebie to ` + FIFTYFIFTY.getName();
            // FIFTYFIFTY.algorithmFiftyFifty(QUESTION.getAnswerTrue());

            const SHUFFLED_LIST_INCORRECT_ANSWERS = FIFTYFIFTY.algorithmFiftyFifty();
            if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "B")
                this.answerB.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "C")
                this.answerC.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "D")
                this.answerD.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[0] == "A")
                this.answerA.classList.add(`fiftyFifty`);

            if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "B")
                this.answerB.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "C")
                this.answerC.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "D")
                this.answerD.classList.add(`fiftyFifty`);
            else if (SHUFFLED_LIST_INCORRECT_ANSWERS[1] == "A")
                this.answerA.classList.add(`fiftyFifty`);

            this.buttonll1.classList.add('usedButton');

            this.buttonll1IsUsed = false;

        }

        else if (LIFELINE_NAME == "AskTheAudience" && this.buttonll2IsUsed == true) {
            this.POPUP.className = "popup";
            this.POPUP.style.display = `block`;

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
            this.buttonll2.classList.add('usedButton');
            this.buttonll2IsUsed = false;
        }
        else if (LIFELINE_NAME == "PhoneAFriend" && this.buttonll3IsUsed == true) {
            this.POPUP.className = "popup";
            this.POPUP.style.display = `block`;

            const PHONE_A_FRIEND = new PhoneAFriend(true);
            this.POPUP.innerHTML = `Koło ratunkowe wybrane przez ciebie to ` + PHONE_A_FRIEND.getName();
            const ANSWER_FROM_FRIEND = PHONE_A_FRIEND.algorithmPhoneAFriend();
            this.POPUP.innerHTML += ` Według niego prawidłowa odpowiedź to odpowiedź ${ANSWER_FROM_FRIEND}.`;
            this.buttonll3.classList.add('usedButton');
            this.buttonll3IsUsed = false;
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
