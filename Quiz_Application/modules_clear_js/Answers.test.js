const Answers = require('./Answers')

describe('totalAnswers', () => {
    it('returns zero when no answers', () =>{
        const subject = new Answers();
        const ANSWERS_LIST = subject.answersList;
        expect(ANSWERS_LIST.length).toBe(0)
    })
})