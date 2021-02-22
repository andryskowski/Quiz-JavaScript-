const Reward = require('./Reward');


describe('totalAnswers', () => {
    it('returns actual reward', () => {
        const subject = new Reward();
        subject.setActualLevel(12);
        const LEVELS = subject.getLevels;
        const ACTUAL_REWARD = LEVELS[12];
        expect(subject.getActualReward()).toBe(ACTUAL_REWARD);
    })

})