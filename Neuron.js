var _ = require('underscore');

module.exports = class Neuron {
    weights = [];
    threshold = 0;
    constructor(weights, threshold) {
        this.weights = weights;
        this.threshold = threshold;
    }
    activate(inputs) {
        let a = [];

        for (let i = 0; i < inputs.length; i++) {
            a.push(this.weights[i] * inputs[i]);
        }
        
        a = _.reduce(a, (memo, item) => {return memo + item}, 0);

        return a >= this.threshold;
    }
}
