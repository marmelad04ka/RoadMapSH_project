const dropdown_item = ['First Item', 'Second Item', 'Third Item', 'Fourth Item', 'Fifth Item'];

const input_container = document.querySelector(".input-dropdown-container");
const input_dropdown = input_container.querySelector("input");
const dropdown = document.querySelector(".choose-dropdown-container");
const dropdown_ul = dropdown.querySelector("ul");
const triangle = document.querySelector(".triangle-container");

let number_of_dropdown_item = -1;

dropdown.classList.add('hidden');

dropdown_menu_html = ``;

for (let i = 0; i < dropdown_item.length; i++) {
    dropdown_menu_html += `
                <li class='dropdown_menu_item'>
                    ${dropdown_item[i]}
                    <div class="check-circle-container hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="feather feather-check-circle">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                </li>
            `;
}

dropdown_ul.innerHTML = dropdown_menu_html;

const dropdown_li_all = dropdown.querySelectorAll("li");
const circle_in_intem = document.querySelectorAll(".check-circle-container");

for (let i = 0; i < dropdown_li_all.length; i++) {
    dropdown_li_all[i].addEventListener('click', () => {
        if (number_of_dropdown_item != i) {
            if (number_of_dropdown_item === -1) {
                circle_in_intem[i].classList.toggle('hidden')
                number_of_dropdown_item = i;
                input_dropdown.value = dropdown_item[i];
            } else {
                circle_in_intem[number_of_dropdown_item].classList.add('hidden')
                circle_in_intem[i].classList.toggle('hidden')
                number_of_dropdown_item = i;
                input_dropdown.value = dropdown_item[i];
            }
        } else {
            circle_in_intem[i].classList.add('hidden')
            input_dropdown.value = '';
            number_of_dropdown_item = -1;
        }
        triangle.classList.toggle('move')
        dropdown.classList.add('hidden');
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