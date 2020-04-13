var _ = require('underscore');

module.exports = class Neuron {
    weights = [];
    threshold = 0;
    constructor(weights, threshold) {
        this.weights = weights.concat([threshold]);
    }
    activate(inputs) {
        var inputs = inputs.concat([-1]);
        let sum = _.zip(inputs, this.weights).map((x) => x[0] * x[1]).reduce((a, i) => a + i, 0);
        return sum > this.threshold ? 1 : -1;
    }
}

