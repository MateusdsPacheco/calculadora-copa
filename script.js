const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === "Erro") clearDisplay();
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval processa a string matemática
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}
