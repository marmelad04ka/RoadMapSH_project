let number_of_dropdown_item = -1;
let onUpdateButton = null;
let onSearchRequest = null;
let onUpdateInfoContainer = null;
let onUpdateContentContainer = null;
let languages1 = null

export function initDropdown(languages, updateButtonCallback, searchCallback, updateInfoContainerCallBack, updateContentContainer) {
    languages1 = languages;
    onUpdateButton = updateButtonCallback;
    onSearchRequest = searchCallback
    onUpdateInfoContainer = updateInfoContainerCallBack;
    onUpdateContentContainer = updateContentContainer;
    
    const input_container = document.querySelector(".input-dropdown-container");
    const input_dropdown = input_container.querySelector("input");
    const dropdown = document.querySelector(".choose-dropdown-container");
    const dropdown_ul = dropdown.querySelector("ul");
    const triangle = document.querySelector(".triangle-container");

    dropdown.classList.add('hidden');

    let dropdown_menu_html = ``;

    for (let i = 0; i < languages.length; i++) {
        dropdown_menu_html += `
                    <li class='dropdown_menu_item'>
                        ${languages[i]}
                        <div class="check-mark-container hidden">
                            <span>✓</span>
                        </div>
                    </li>
                `;
    }

    dropdown_ul.innerHTML = dropdown_menu_html;

    const dropdown_li_all = dropdown.querySelectorAll("li");
    const mark_in_item = document.querySelectorAll(".check-mark-container");

    for (let i = 0; i < dropdown_li_all.length; i++) {
        dropdown_li_all[i].addEventListener('click', () => {
            if (number_of_dropdown_item != i) {
                if (number_of_dropdown_item != -1) {
                    mark_in_item[number_of_dropdown_item].classList.add('hidden')
                }
                mark_in_item[i].classList.toggle('hidden')
                number_of_dropdown_item = i;
                input_dropdown.value = languages[i];
            } else {
                mark_in_item[i].classList.add('hidden')
                input_dropdown.value = '';
                number_of_dropdown_item = -1;
            }
            triangle.classList.toggle('move')
            dropdown.classList.add('hidden');
            const selected = number_of_dropdown_item === -1 ? null : languages[number_of_dropdown_item];

            onUpdateButton({hide_button:true})
            onUpdateContentContainer({hide:true})

            if (selected === null && onUpdateInfoContainer ) {
                onUpdateInfoContainer({default_state:true})
            }

            if (selected && onSearchRequest) {
                onSearchRequest(selected, onUpdateInfoContainer, onUpdateButton, onUpdateContentContainer);
            }
            getSelectedLanguage();
        })
    }

    input_container.addEventListener('click', function(event) {
        dropdown.classList.toggle('hidden')
        triangle.classList.toggle('move')
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.classList.contains('hidden') && 
            !dropdown.contains(event.target) && 
            !input_container.contains(event.target)) {
            closeDropdown();
        }
    });

    function closeDropdown() {
        dropdown.classList.add('hidden');
        triangle.classList.remove('move');
    }
}

export function getSelectedLanguage() {
    if (number_of_dropdown_item === -1) {
        return null;
    }
    return languages1[number_of_dropdown_item];
}