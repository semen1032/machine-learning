var Neuron = require('./Neuron.js')

function logical_and(inputs) {
    let neuron = new Neuron([1, 1], 2);
    console.log(`Результат работы программы для параметров ${inputs}: \t`, neuron.activate(inputs));
}

function logical_or(inputs) {
    let neuron = new Neuron([1, 1], 1);
    console.log(`Результат работы программы для параметров ${inputs}: \t`, neuron.activate(inputs));
}

function logical_not(inputs) {
    let neuron = new Neuron([-1], 0);
    console.log(`Результат работы программы для параметров ${inputs}: \t`, neuron.activate(inputs));
}

console.log("\t\t**Логическое И**");
logical_and([0, 0]);
logical_and([0, 1]);
logical_and([1, 0]);
logical_and([1, 1]);

console.log("\n\t\t**Логическое ИЛИ**");
logical_or([0, 0]);
logical_or([0, 1]);
logical_or([1, 0]);
logical_or([1, 1]);

console.log("\n\t\t**Логическое НЕ**");
logical_not([0]);
logical_not([1]);