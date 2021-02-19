const Answers = require('./Answers')

describe('totalAnswers', () => {
    it('returns zero when no answers', () => {
        const subject = new Answers();
        const ANSWERS_LIST = subject.answersList;
        expect(ANSWERS_LIST.length).toBe(0)
    })

    it('returns count of answers', () => {
        const subject = new Answers();
        subject.addAnswerToList('A');
        subject.addAnswerToList('B');
        const COUNT_ANSWERS = subject.answersList.length;
        expect(COUNT_ANSWERS).toBe(2);
    })
})

describe('add', () => {
    it('add answer', () => {
        const subject = new Answers();
        subject.addAnswerToList('A');
        const ANSWERS_LIST = subject.answersList;
        const ACTUAL_COUNT = ANSWERS_LIST.length;
        expect(ACTUAL_COUNT).toBeGreaterThan(0)

    })
    it('throws error when no answer given', () => {
        const subject = new Answers();
        expect(() => {
            subject.addAnswerToList();
        }).toThrow('Answer needed!');
    })

})

describe('count', () => {
    it('count answer', () => {
        const subject = new Answers();
        subject.addAnswerToListIfTrue(true);
        subject.addAnswerToListIfTrue(true);
        const ACTUAL_COUNT = subject.countCorrectAnswers();
        expect(ACTUAL_COUNT).toBe(2);
    })
    it('throws error when false answer given', () => {
        const subject = new Answers();
        subject.addAnswerToListIfTrue(false);
        expect(() => {
            subject.countCorrectAnswers();
        }).toThrow('Answer is not true!');
    })
   

})