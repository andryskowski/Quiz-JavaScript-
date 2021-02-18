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
})