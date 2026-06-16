const button = document.querySelector(".button-container button");

const refresh_text = 'Refresh';
const retry_text = 'Click to retry'

const refresh_style = 'refresh_button'
const retry_style = 'retry_button'
const hidden = 'hidden';

let language;
let updateInfoContainer;
let updateContentContainer;
let searchRepos;

export function initButton(languageCallback, updateInfoContainerCallback, updateContentContainerCallback, searchReposCallback) {
    language = languageCallback;
    updateInfoContainer = updateInfoContainerCallback;
    updateContentContainer = updateContentContainerCallback;
    searchRepos = searchReposCallback;

    button.classList.add(hidden)

    button.textContent = refresh_text;
    button.classList.add(refresh_style)
}

button.addEventListener('click', function(event) {
    searchRepos(language(), updateInfoContainer, updateButton, updateContentContainer)
})

export function updateButton({selectedLanguage, error_state, show_button, hide_button, refresh_button}) {
    if (show_button) {
        button.classList.remove(hidden);
    }

    if (hide_button) {
        button.classList.add(hidden);
    }

    if (error_state) {
        button.textContent = retry_text;
        button.classList.remove(refresh_style)
        button.classList.add(retry_style)
    }

    if (refresh_button) {
        button.textContent = refresh_text;
        button.classList.remove(retry_style)
        button.classList.add(refresh_style)
    }
};