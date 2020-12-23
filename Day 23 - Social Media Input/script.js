const textarea = document.querySelector('#string');
const counter = document.querySelector('#counterFooter');
const tweetBtn = document.querySelector('#btn');

textarea.addEventListener('input', (e) => {
    setTimeout(() => {
        const strL = e.target.value.length;
        counter.textContent = `${140 - strL}/140`;

        if (strL >= 140 - 20) {
            counter.style.color = 'red';
        } else {
            counter.style.color = 'white';
        }

        if (strL > 140) {
            tweetBtn.classList.add('buttonDisabled');
        } else {
            tweetBtn.classList.remove('buttonDisabled');
        }
    }, 1);
});
