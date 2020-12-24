let pushed = false; // Has the stop button been pushed - false is default
let targetInt; // The target number to stop the wheel on
const spinningElem = document.getElementById('spinning'); // The spinning number

// Event listener
document.getElementById('buttonPressed').addEventListener('click', buttonPressed);

// When the stop button is pushed
function buttonPressed() {
    pushed = true;
}

// Set the target Int
function setTargetInt() {
    const targetElem = document.getElementById('targetNum');
    targetInt = Math.floor(Math.random() * 101);
    targetElem.innerHTML = targetInt;
}

// Sleep const
const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// Number spinner
const spin = async () => {
    for (let i = 0; i < 101; i++) {
        if (i === 100) {
            i = 0;
        }
        if (pushed === true) {
            stop(i);
            break;
        } else {
            spinningElem.innerHTML = i;
            await sleep(75);
        }
    }
};

function stop(i) {
    let dif = Math.abs(targetInt - (i - 1));

    document.getElementById('result').innerHTML = dif === 0 ? 'You Win!' : `Oh no, you lose! Off by ${dif}`;
}

setTargetInt();
spin();
