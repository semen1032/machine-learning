let Neuron = require('./Neuron');

const ZERO =    [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
const ONE =     [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1]
const TWO =     [-1, -1, 1, -1, -1, -1, -1, -1, -1, -1]
const THREE =   [-1, -1, -1, 1, -1, -1, -1, -1, -1, -1]
const FOUR =    [-1, -1, -1, -1, 1, -1, -1, -1, -1, -1]
const FIVE =    [-1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
const SIX =     [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
const SEVEN =   [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1]
const EIGHT =   [-1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
const NiNE =    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]


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
]


function create_neurons_lst(neurons_lst, inp_seq) {
    for (let i = 0; i < 10; i++) {
        neurons_lst.push(new Neuron([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i));
    }
}

// Обучение нейрона
function training(neuron, inp_seq, out_seq, out_digit) {
    let out;
    let i = 0;
    while (i < 10) {
        let sum = 0;
        for (let j = 0; j < 15; j++) {
            sum += neuron.weights[j] * inp_seq[j];
        }
        sum -= neuron.threshold;
        out = sum > 0 ? 1 : -1;
        if (out != out_seq[i]) {
            neuron.weights[i] = neuron.weights[i] + inp_seq[i] * out_seq[i];
            neuron.threshold = neuron.threshold - out_seq[i];
        }
        else
            i++;
        }
    // console.log(neuron.weights.toString());
    return out;
}

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
        out_lst.push(check_digit(neuron_lst[i], digit));
    }
    console.log(out_lst.toString());
}

create_neurons_lst(neurons_lst, inp_sequence);

training(neurons_lst[0], inp_sequence[0], ZERO, 0); 
training(neurons_lst[1], inp_sequence[1], ONE, 0); 
training(neurons_lst[2], inp_sequence[2], TWO, 0); 
training(neurons_lst[3], inp_sequence[3], THREE, 0);
training(neurons_lst[4], inp_sequence[4], FOUR, 0); 
training(neurons_lst[5], inp_sequence[5], FIVE, 0); 
training(neurons_lst[6], inp_sequence[6], SIX, 0); 
training(neurons_lst[7], inp_sequence[7], SEVEN, 0);
training(neurons_lst[8], inp_sequence[8], EIGHT, 0);
training(neurons_lst[9], inp_sequence[9], NiNE, 0); 

digit_out(neurons_lst, [1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1]);


