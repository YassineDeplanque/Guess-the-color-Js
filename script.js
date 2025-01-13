let goodColor = [];
let idSelector = [1, 2, 3];

function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}

function printFail() {
    let paragraph2 = document.querySelector('#secondP');
    paragraph2.textContent = 'Wrong, try again !';
    paragraph2.style.color = 'red';
}

function printWin() {
    buttonRefresh = document.createElement('button');
    buttonRefresh.style.backgroundColor = 'rgba(0,0,0,0.8)';
    buttonRefresh.style.color = 'white';
    buttonRefresh.style.height = '100%';
    buttonRefresh.textContent = "Next";
    buttonRefresh.onclick = () => { window.location.reload();
    };

    let paragraph2 = document.querySelector('#secondP');
    paragraph2.textContent = 'Yes, you are right !';
    paragraph2.style.color = 'green';
    paragraph2.appendChild(buttonRefresh);
}

shuffleArray(idSelector);

let firstNumber = Math.floor(Math.random() * 255);
let secondNumber = Math.floor(Math.random() * 255);
let thirdNumber = Math.floor(Math.random() * 255);

goodColor.push(firstNumber, secondNumber, thirdNumber);
let colorCode = `rgb(${goodColor[0]}, ${goodColor[1]}, ${goodColor[2]})`;
let paragraph = document.querySelector('#firstP');
paragraph.textContent = colorCode;

var button1 = document.getElementById(`${idSelector[0]}`);
button1.style.backgroundColor = colorCode;
button1.onclick = printWin;

let wrongColor = [];

let wrongFirstNumber = Math.floor(Math.random() * 255);
let wrongSecondNumber = Math.floor(Math.random() * 255);
let wrongThirdNumber = Math.floor(Math.random() * 255);

wrongColor.push(wrongFirstNumber, wrongSecondNumber, wrongThirdNumber);
let wrongColorCode = `rgb(${wrongColor[0]}, ${wrongColor[1]}, ${wrongColor[2]})`;

var button2 = document.getElementById(`${idSelector[1]}`);
button2.style.backgroundColor = wrongColorCode;
button2.onclick = printFail;

let wrongColor2 = [];

let wrongFirstNumber2 = Math.floor(Math.random() * 255);
let wrongSecondNumber2 = Math.floor(Math.random() * 255);
let wrongThirdNumber2 = Math.floor(Math.random() * 255);

wrongColor2.push(wrongFirstNumber2, wrongSecondNumber2, wrongThirdNumber);
let wrongColorCode2 = `rgb(${wrongColor2[0]}, ${wrongColor2[1]}, ${wrongColor2[2]})`;

var button3 = document.getElementById(`${idSelector[2]}`);
button3.style.backgroundColor = wrongColorCode2;
button3.onclick = printFail;
