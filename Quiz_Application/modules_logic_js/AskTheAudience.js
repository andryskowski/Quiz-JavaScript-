class AskTheAudience extends LifeLine {
    constructor(isUsed) {
        super(isUsed);
        let _name = `Ask the audience!`;
        this.getName = () => _name;
        this.setName = (_newName) => _name = _newName;
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    compareNumbers(a, b) {
        if (a > b)
            return -1
        if (a < b)
            return 1
        // a równe b
        return 0
    }

    //function returns list of three incorrect answers
    algorithmAskTheAudience() {
        //list for percents, for every answer
        const LIST_PERCENTS = [this.getRandomInt(0, 100)];

        LIST_PERCENTS.push(this.getRandomInt(0, 100 - LIST_PERCENTS[0]))
        LIST_PERCENTS.push(this.getRandomInt(0, 100 - (LIST_PERCENTS[1] + LIST_PERCENTS[0])))
        LIST_PERCENTS.push(100 - (LIST_PERCENTS[2] + LIST_PERCENTS[1] + LIST_PERCENTS[0]))

        const PERCENT_A = 70;
        const DEC_LIST_PERCENTS = LIST_PERCENTS.sort(this.compareNumbers);
        return DEC_LIST_PERCENTS;
    }
}