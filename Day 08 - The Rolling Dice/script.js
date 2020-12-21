// Create base dice
for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    document.querySelector('.dice').appendChild(div);
}
const dice = Array.from(document.querySelectorAll('.dice div'));

// Button event
document.querySelector('.btn-roll').addEventListener('click', () => {
    const rdmNum = Math.floor(Math.random() * 6) + 1;
    showNumber(rdmNum);
});

// Display dot
const dotPosition = {
    1: [4],
    2: [2, 6],
    3: [2, 4, 6],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
};

function showNumber(num) {
    // Remove prev display
    dice.map((dot) => {
        dot.classList.remove('dot');
    });

    // Add new display
    dotPosition[num].forEach((pos) => {
        dice[pos].classList.add('dot');
    });
}
