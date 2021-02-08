class Reward {
    constructor() {
        let _actualLevel = 12;
        this.getActualLevel = () => _actualLevel;
        this.setActualLevel = (_newLevel) => _actualLevel = _newLevel;
        let _levels = [`1000000`, `500000`, `250000`, `125000`, `75000`, `40000`, `20000`, `10000`, `5000`, `2000`, `1000`, `500`];
        this.getLevels = () => _levels;

        this.guaranteedReward = 0;
        this.getGuaranteedReward = () =>  this.guaranteedReward;
        this.setGuaranteedReward = (_newGuaranteedReward) => this.guaranteedReward = _newGuaranteedReward;
    }
}


const REWARD = new Reward();