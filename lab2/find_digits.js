let Neuron = require('./Neuron');
var _ = require('underscore');


const ZERO =    [1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
const ONE =     [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1];
const TWO =     [-1, -1, 1, -1, -1, -1, -1, -1, -1, -1];
const THREE =   [-1, -1, -1, 1, -1, -1, -1, -1, -1, -1];
const FOUR =    [-1, -1, -1, -1, 1, -1, -1, -1, -1, -1];
const FIVE =    [-1, -1, -1, -1, -1, 1, -1, -1, -1, -1];
const SIX =     [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1];
const SEVEN =   [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1];
const EIGHT =   [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1];
const NiNE =    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1];

let out_sequence_lst = [
    ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NiNE
];

let neurons_lst = [];
let inp_sequence = [
    [1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1],
    [-1, 1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, 1],
    [1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1],
    [1, 1, 1, -1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, -1, 1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
    [1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1],
    [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
];

function create_neurons_lst(neurons_lst) {
    for (let i = 0; i < 10; i++) {
        neurons_lst.push(new Neuron([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));
    }
}

function correct(neuron, inp_sequence, out_sequence) {
    for (let i = 0; i < inp_sequence.length; i++) {
        if (neuron.activate(inp_sequence[i]) == out_sequence[i])
            continue;
        else
            return [inp_sequence[i], out_sequence[i]]
    }
    return true
}

function fix(neuron, input, output) {
    let g = (j) => j[1] + (j[0] * output);
    neuron.weights = _.zip(input.concat([-1]), neuron.weights).map(g);
}

function training2(neuron, inp_sequence, out_sequence) {
    let line = 0;
    while (true) {
        let check_result = correct(neuron, inp_sequence, out_sequence); 
        if (check_result === true)
            break;
        else
            fix(neuron, check_result[0], check_result[1]);
    }
}

create_neurons_lst(neurons_lst);

neurons_lst.forEach(function(neuron, i) {
    training2(neuron, inp_sequence, out_sequence_lst[i]);
    //console.log(neuron.weights.toString());
});

// Проверка значения
function check_digit(neuron, digit) {
    let sum = 0;
    let out;
    for (let j = 0; j < 15; j++) {
        sum += neuron.weights[j] * digit[j];
    }
    sum -= neuron.threshold;
    out = sum > 0 ? 1 : -1;
    return out;
}

// Вывод результата
function digit_out(neuron_lst, digit) {
    out_lst = [];
    for (let i = 0; i < neuron_lst.length; i++) {
        out_lst.push(neuron_lst[i].activate(digit));
    }

    compareArrays = (arr1, arr2) => {
        let len = Math.max(arr1.length, arr2.length);
        let sorted1 = arr1.sort();
        let sorted2 = arr2.sort();
    
        for (let i = 0; i < len; i++) {
            if (sorted1[i] !== sorted2[i])
                return sorted1[i] || sorted2[i];
        }
        return true;
    }

    return out_lst;
}


function parse_digit(arr) {
    console.log(_.indexOf(arr, 1));
}

parse_digit(digit_out(neurons_lst, inp_sequence[2]));
