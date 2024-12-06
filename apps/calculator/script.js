let output = document.getElementById("output");
let conversationBox = document.getElementById("conversation");

function appendNumber(number) {
    output.value += number;
    conversationBox.textContent = `You typed: ${output.value}`;
}

function appendOperator(operator) {
    output.value += ' ' + operator + ' ';
    conversationBox.textContent = `You typed: ${output.value}`;
}

function clearOutput() {
    output.value = '';
    conversationBox.textContent = "Type your calculation";
}

function calculateResult() {
    try {
        let result = eval(output.value);
        output.value = result;
        conversationBox.textContent = `Result: ${result}`;
    } catch {
        output.value = '';
        conversationBox.textContent = "Error in calculation!";
    }
}
