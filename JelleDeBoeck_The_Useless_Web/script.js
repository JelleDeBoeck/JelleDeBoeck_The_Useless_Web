const numberContainer = document.getElementById('numberContainer');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');
let currentNumber = 9;
let countingDown = true;

function updateNumber() {
    numberContainer.textContent = currentNumber;
}

function updateArrows() {
    if (countingDown) {
        arrowUp.classList.remove('active');
        arrowDown.classList.add('active');
    } else {
        arrowUp.classList.add('active');
        arrowDown.classList.remove('active');
    }
}

function countUpDown() {
    setTimeout(() => {
        if (countingDown) {
            currentNumber--;

            if (currentNumber === 3) {
                countingDown = false;
            }
        } else {
            currentNumber++;

            if (currentNumber === 9) {
                countingDown = true;
            }
        }

        updateNumber();
        updateArrows();
        countUpDown();
    }, 3000);
}

countUpDown();
