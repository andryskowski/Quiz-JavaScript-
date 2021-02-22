class PhoneAFriend extends LifeLine {
    constructor(isUsed) {
        super(isUsed);
        let _name = `phone to friend!`;
        this.getName = () => _name;
        this.setName = (_newName) => _name = _newName;
    }

    algorithmPhoneAFriend() {
       const CORRECT_ANSWER =  QUESTION.getAnswerTrue();
       const LIST_PROBABILITY = ["A", "B", "C", "D", CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER,
       CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER, CORRECT_ANSWER];
       const ANSWER_FROM_FRIEND = LIST_PROBABILITY[Math.floor(Math.random() * LIST_PROBABILITY.length)];
       
       return ANSWER_FROM_FRIEND;
    }
}