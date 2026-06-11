const textarea = document.querySelector(".textarea-container textarea");
const container = document.querySelector(".textarea-container");
const counterSpan = document.querySelector(".counter-container .zero");
const maxSpan = document.querySelector(".counter-container .max_length");

const max_l = textarea.getAttribute('maxlength');
maxSpan.textContent = max_l;

textarea.addEventListener('input', function(event) {
    const counter = event.target.value.length;
    counterSpan.textContent = counter;
    
    if (counter >= max_l) {
        container.classList.add("many");
    } else {
        container.classList.remove("many");
    }
});