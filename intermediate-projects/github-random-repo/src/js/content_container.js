const content_container = document.querySelector(".content-container");
const title = content_container.querySelector(".name-repo-container");
const main_text = content_container.querySelector(".main-text-container");
const language_name = content_container.querySelector(".language-name-container");
const circle_language = content_container.querySelector(".color-circle-container");
const stars = content_container.querySelector(".stars-count-container");
const forks = content_container.querySelector(".fork-count-container");
const issue = content_container.querySelector(".issue-count-container")

const hidden_item = 'hidden';
const yellow_color = 'yellow_color';
const blue_color = 'blue_color';
const orange_color = 'orange_color';
const red_color = 'red_color';

export function updateContentContainer({show, data, language, hide }) {
    if (show && data && language) {
        content_container.classList.remove(hidden_item)

        title.textContent = data.items[0].name;
        main_text.textContent = data.items[0].description;
        language_name.textContent = language;
        stars.textContent = data.items[0].stargazers_count;
        forks.textContent = data.items[0].forks_count;
        issue.textContent = data.items[0].open_issues_count;

        circle_language.className = content_container.querySelector(".color-circle-container");
        switch (language) {
            case 'JavaScript':
                circle_language.classList.add(yellow_color);
                break;
            case 'Python':
                circle_language.classList.add(blue_color);
                break;
            case 'Java':
                circle_language.classList.add(orange_color);
                break;
            case 'Assembler':
                circle_language.classList.add(red_color);
                break;
        }
    }

    if (hide) {
        content_container.classList.add(hidden_item)
    }
}