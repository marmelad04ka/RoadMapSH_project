const question = [ '',
    "What is the different between var, let, and const ?",
    "What does typeof null return?",
    "What is a closure?",
    "What keyword catches errors?",
    "What does the === operator check?",
    "Explain the difference between let and var in a loop.",
    "What is NaN short for?",
    "How do you make a function async, and what does it return?",
    "What is a promise's initial state?",
    "What does the spread operator (...) do to an array?",
    "What is event delegation?",
    "What does event.preventDefault() do?",
    "What is undefined?",
    "What is the difference between null and undefined?",
    "How do you convert a JSON string into a JS object?",
    "What does the map() array method return?",
    "What is the purpose of the fetch API?",
    "What is event bubbling?",
    "What is the purpose of \"use strict\"?",
    "What does Array.isArray() do?"
];

const answer = [ '',
    "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.",
    "Object. This is a famous, longstanding bug in JavaScript.",
    "A function combined with its lexical environment. It retains access to variables from its outer scope even after the outer function has finished executing.",
    "Catch",
    "Strict equality. It compares two values without performing type conversion, meaning both the value and the type must be identical to return true.",
    "Var is function-scoped, so a loop variable is shared across iterations. let is block-scoped, creating a new binding for each iteration, which is crucial for closures inside loops.",
    "Not-a-Number.",
    "By adding the async keyword. It automatically wraps the function's return value in a Promise, allowing the use of await inside for cleaner asynchronous code.",
    "Pending",
    "It expands an iterable (like an array) into individual elements, commonly used for copying or merging arrays.",
    "A technique where a single event listener is attached to a parent element to manage events on its current or future children, leveraging event bubbling for efficiency",
    "It stops the browser's default action for an event, like following a link or submitting a form, allowing custom JavaScript handling.",
    "A primitive value automatically assigned to variables that have been declared but not yet assigned a value.",
    "undefined means a variable hasn't been assigned a value. null is an assigned value representing no object or empty value.",
    "Use JSON.parse(string).",
    "A new array filled with the results of calling a provided function on every element in the calling array. It doesn't mutate the original.",
    "It provides a modern, promise-based interface for making network requests. It uses Request and Response objects and is a more powerful and flexible replacement for XMLHttpRequest.",
    "It's a DOM event propagation method where an event starts from the deepest target element and then bubbles up to its ancestors.",
    "It enables strict mode, which catches common coding mistakes and \"unsafe\" actions (like using undeclared variables) by throwing errors.",
    "Checks if a value is an array."
];

let counter = 1;
const max_question_length = question.length - 1;

const welcome_text = `Hello. This is a JavaScript quiz. You'll have ${max_question_length} questions to answer. Good luck!`;
const start = 'Start';
const show_answer = 'Show answer';
const hide_answer = 'Hide answer';
const restart_quiz = 'Start again';
const the_end = 'The quiz is over. Thank you for taking it.';

const text_quest_answ = document.querySelector(".text-container");
const previous_button = document.querySelector(".previous-button-container");
const center_button = document.querySelector(".center-button-container button");
const next_button = document.querySelector(".next-button-container button");
const counter_text = document.querySelector(".counter-container");
const progress_line = document.querySelector('.progress-line-container');

document.addEventListener('DOMContentLoaded', () => {
    change_classlist(counter_text, 'unvisible', 'add');
    
    text_quest_answ.textContent = welcome_text;

    change_text_size(welcome_text, text_quest_answ);

    change_classlist(previous_button, 'unvisible', 'add');
    change_classlist(next_button, 'unvisible', 'add');
    
    center_button.textContent = start;
});


center_button.addEventListener('click', function(event) {
    if (center_button.textContent === start) {
        change_classlist(counter_text, 'unvisible', 'remove');
        counter_text_change();
        text_quest_answ.textContent = question[counter];

        change_text_size(question[counter], text_quest_answ);
        change_classlist(next_button, 'unvisible', 'remove');
        show_button_answer();
        progress_line_change();
        return;
    };

    if (center_button.textContent === show_answer) {
        text_quest_answ.textContent = answer[counter];
        center_button.textContent = hide_answer;

        change_text_size(answer[counter], text_quest_answ);
        return;
    };

    if (center_button.textContent === hide_answer) {
        text_quest_answ.textContent = question[counter];

        change_text_size(question[counter], text_quest_answ);
        show_button_answer();
        return;
    };

    if (center_button.textContent === restart_quiz) {
        counter = 1;
        change_classlist(counter_text, 'unvisible', 'add');
        counter_text_change();

        text_quest_answ.textContent = welcome_text;
        center_button.textContent = start;
        change_text_size(welcome_text, text_quest_answ);

        change_classlist(next_button, 'unvisible', 'add');
        change_classlist(previous_button, 'unvisible', 'add');

        progress_line_change(0);
        return;
    }
});

previous_button.addEventListener('click', function(event) {
    counter -= 1;
    counter_text_change();
    text_quest_answ.textContent = question[counter];
    show_button_answer();

    change_text_size(question[counter], text_quest_answ);
    
    progress_line_change();
    
    if (counter === 0 || counter === 1) {
        change_classlist(previous_button, 'unvisible', 'add');
    };

    if (counter != max_question_length) {
        change_classlist(next_button, 'unvisible', 'remove');
    }
});

next_button.addEventListener('click', function(event) {
    if (counter === max_question_length) {
        change_classlist(next_button, 'unvisible', 'add');
        text_quest_answ.textContent = the_end;
        center_button.textContent = restart_quiz;
        change_classlist(previous_button, 'unvisible', 'add');
        return;
    };

    counter += 1;
    counter_text_change();
    text_quest_answ.textContent = question[counter];
    change_text_size(question[counter], text_quest_answ);

    show_button_answer();
    progress_line_change();
    
    if (counter != 0) {
        previous_button.classList.remove('unvisible');
        change_classlist(next_button, 'unvisible', 'remove');
    };
    
});

function progress_line_change(counterParam) {
    const currentCounter = counterParam !== undefined ? counterParam : counter;
    progress_line.style.width = (currentCounter) / max_question_length * 100 + '%';
};

function counter_text_change() {
    counter_text.textContent = `${counter} of ${max_question_length}`;
};

function show_button_answer() {
    center_button.textContent = show_answer;
};

function change_classlist(item, classlist, deal) {
    item.classList[deal](classlist);
};

function change_text_size(text, item) {
    text_quest_answ.classList.remove('extra-long-text', 'little-text', 'middle-text');

    void text_quest_answ.offsetWidth;

    if (text.length >= 190) {
        change_classlist(item, 'extra-long-text', 'add');
    };

    if (text.length >= 70 && text.length < 190) {
        change_classlist(item, 'middle-text', 'add')
    };

    if (text.length < 70) {
        change_classlist(item, 'little-text', 'add')
    };
};
