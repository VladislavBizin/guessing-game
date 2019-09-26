class GuessingGame {
    constructor() {
        this.floor = null;
        this.ceil = null;
    }

    setRange(min, max) {
        this.floor = min;
        this.ceil = max;
    }

    guess() {
        return Math.ceil((this.floor + this.ceil) / 2);

    }

    lower() {
        this.ceil = Math.ceil((this.floor + this.ceil) / 2);
    }

    greater() {
        this.floor = Math.ceil((this.ceil + this.floor) / 2);
    }
}



module.exports = GuessingGame;

