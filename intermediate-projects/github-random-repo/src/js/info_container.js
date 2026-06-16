const default_state_text_info_container = 'Please select a language'
const loading_state_text_info_container = 'Loading, please wait...'
const error_state_text_info_container = 'Error fetching repositories'

const info_container = document.querySelector(`.info-container`);
const info_container_class = info_container.className

const deafult_state = 'default_state_info_container';

export function initInfoContainer(hidden_item_class) {
    info_container.classList.add(deafult_state);
    info_container.textContent = default_state_text_info_container;
}

export function updateInfoContainer({ startSearch, endSearch, default_state, error_state }) {
    if (startSearch) {
        info_container.className = info_container_class;
        info_container.classList.add(deafult_state);
        info_container.textContent = loading_state_text_info_container;
    }
    if (endSearch) {
        info_container.classList.add('hidden');
    }
    if (default_state) {
        info_container.className = info_container_class;
        info_container.classList.add(deafult_state);
        info_container.textContent = default_state_text_info_container;
    }
    if (error_state) {
        info_container.textContent = error_state_text_info_container;
        info_container.classList.add('error_state_info_container');
    }
}