class Reward {
    constructor() {
        let _actualLevel = 12;
        this.getActualLevel = () => _actualLevel;
        this.setActualLevel = (_newLevel) => _actualLevel = _newLevel;
        let _levels = [`1000000`, `500000`, `250000`, `125000`, `75000`, `40000`, `20000`, `10000`, `5000`, `2000`, `1000`, `500`];
        this.getLevels = () => _levels;

        this.getActualReward = () => {
            const LEVELS = this.getLevels();
            const actualLevel = this.getActualLevel();
            return LEVELS[actualLevel];
        }
        
        this.guaranteedReward = 0;
        this.getGuaranteedReward = () =>  this.guaranteedReward;
        this.setGuaranteedReward = (_newGuaranteedReward) => this.guaranteedReward = _newGuaranteedReward;
    }
}

//instance of this class
const REWARD = new Reward();

//module.exports especially for tests
// module.exports = Reward;
