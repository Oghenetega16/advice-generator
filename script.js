const adviceNumber = document.querySelector('span');
const adviceText = document.querySelector('h1');
const dice = document.querySelector('.dice');

async function generateAdvice() {
    const fetchAdvice = await fetch("https://api.adviceslip.com/advice");
    const advice = await fetchAdvice.json();
    adviceNumber.innerHTML = ` # ${advice.slip.id}`;
    adviceText.innerHTML = `"${advice.slip.advice}"`;
}

dice.addEventListener('click', generateAdvice);
