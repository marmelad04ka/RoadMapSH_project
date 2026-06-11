const questions = ["First question", "Second question", "Third question", "Fourth question", "Five question", "Six question"]
const answers = [
    "First answer.First answer.First answer.First answer.First answer.First answer.First answer.First answer.",
    "Second answer.Second answer.Second answer.Second answer.Second answer.Second answer.Second answer.Second answer.",
    "Third answer.Third answer.Third answer.Third answer.Third answer.Third answer.Third answer.Third answer.Third answer.",
    "Four answer.Four answer.Four answer.Four answer.Four answer.Four answer.Four answer.Four answer.Four answer.",
    "Five answer.Five answer.Five answer.Five answer.Five answer.Five answer.Five answer.Five answer.Five answer.Five answer.",
    "Six answer.Six answer.Six answer.Six answer.Six answer.Six answer.Six answer.Six answer.Six answer.Six answer.Six answer."
]

let accordionHTML = '';

for (let i = 0; i < questions.length; i++) {
    accordionHTML += `
        <div class="button-item">
            <button>${questions[i]}</button>
            <div class="triangle">▼</div>
        </div>
        <div class="info-item hidden">
            <div class="text-accordion-container">
                ${answers[i]}
            </div>
        </div>
    `;
}

document.querySelector('.accordion-body-container').innerHTML = accordionHTML;

const buttons = document.querySelectorAll('.button-item');
const infos = document.querySelectorAll('.info-item');
const triangles = document.querySelectorAll('.triangle');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        infos[i].classList.toggle('hidden');
        triangles[i].classList.toggle('move');
    });
}