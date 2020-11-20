class Draw { 
    
    constructor() {
        // this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
        this.counter = 0;
        this.changeQuestion();

        this.setDraw = () => {
        this.question = document.querySelector('.question p.question');
        this.question.innerHTML = QUESTION.getQuestion();

        this.answerA = document.querySelector('.question span.A');
        this.answerA.innerHTML = `A.` + QUESTION.getAnswerA();
        this.answerA.addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
        this.checkAnswer('A');
        this.answerB.classList.remove('checkedAnswer');
        this.answerC.classList.remove('checkedAnswer');
        this.answerD.classList.remove('checkedAnswer');
        });
        
        this.answerB = document.querySelector('.question span.B');
        this.answerB.innerHTML = `B.` + QUESTION.getAnswerB();
        this.answerB.addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
        this.checkAnswer('B');
        this.answerA.classList.remove('checkedAnswer');
        this.answerC.classList.remove('checkedAnswer');
        this.answerD.classList.remove('checkedAnswer');
        });

        this.answerC = document.querySelector('.question span.C');
        this.answerC.innerHTML = `C.` + QUESTION.getAnswerC();
        this.answerC.addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
        this.checkAnswer('C');
        this.answerA.classList.remove('checkedAnswer');
        this.answerB.classList.remove('checkedAnswer');
        this.answerD.classList.remove('checkedAnswer');
        });

        this.answerD = document.querySelector('.question span.D');
        this.answerD.innerHTML = `D.` + QUESTION.getAnswerD();
        this.answerD.addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
        this.checkAnswer('D');
        this.answerA.classList.remove('checkedAnswer');
        this.answerB.classList.remove('checkedAnswer');
        this.answerC.classList.remove('checkedAnswer');
        });
    }
    }
    
    checkAnswer(checkedAnswer) {
        if(checkedAnswer === QUESTION.getAnswerTrue())
        {
            alert('Prawidłowa odpowiedź!');
        }
        else
        {
            alert('Nieprawidłowa odpowiedź! :(');
        }  
    }

    changeQuestion() {
        const button = document.querySelector('button');
        console.log("elo");
        button.addEventListener("click", () => {
            QUESTION.setQuestionID(this.counter+=1);
            draw.setDraw();
            console.log("elo");
        });
    }

    drawResult() {
    
    

    // document.querySelector('.question span.A').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer');
    // this.isAnswerTrue()} )
    // document.querySelector('.question span.B').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
    // document.querySelector('.question span.C').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
    // document.querySelector('.question span.D').addEventListener("click", (e)=>{e.target.classList.toggle('checkedAnswer')})
    // document.querySelector('.question span.A').classList.toggle('.checkedAnswer')

    }


}



const draw = new Draw();
draw.setDraw();