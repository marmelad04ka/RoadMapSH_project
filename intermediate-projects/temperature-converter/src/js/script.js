const temperatures = ['Fahrenheit', 'Celseus', 'Kelvin'];

let selected_values = {temperature:'', from_unit:'', to_unit:''};

const to_unit_container = document.querySelector(".tounit-dropdown-container");
const dropdown_to_unit = to_unit_container.querySelector(".choose-dropdown-container");
const ul_dropdown_to_unit = dropdown_to_unit.querySelector("ul");
const triangle_to_unit = to_unit_container.querySelector(".triangle-container");
const input_container_to_unit = to_unit_container.querySelector(".input-dropdown-container")
const input_dropdown_to_unit = input_container_to_unit.querySelector("input");

const from_unit_container = document.querySelector(".fromunit-dropdown-container");
const dropdown_from_unit = from_unit_container.querySelector(".choose-dropdown-container");
const ul_dropdown_from_unit = dropdown_from_unit.querySelector("ul");
const triangle_from_unit = from_unit_container.querySelector(".triangle-container");
const input_container_from_unit = from_unit_container.querySelector(".input-dropdown-container")
const input_dropdown_from_unit = input_container_from_unit.querySelector("input");

const input_temperature = document.querySelector(".temperature-input-container input");

const convert_button = document.querySelector(".button-convert-container");

work_in_dropdown(
    to_unit_container, 
    dropdown_to_unit, 
    ul_dropdown_to_unit, 
    triangle_to_unit, 
    input_container_to_unit, 
    input_dropdown_to_unit
);

work_in_dropdown(
    from_unit_container, 
    dropdown_from_unit, 
    ul_dropdown_from_unit, 
    triangle_from_unit, 
    input_container_from_unit, 
    input_dropdown_from_unit,
    from_unit=true
)

input_container_to_unit.addEventListener('click', function(event) {
    dropdown_to_unit.classList.toggle('hidden')
    triangle_to_unit.classList.toggle('move')
});

input_container_from_unit.addEventListener('click', function(event) {
    dropdown_from_unit.classList.toggle('hidden')
    triangle_from_unit.classList.toggle('move')
});

input_temperature.addEventListener('input', function(event) {
    if (isNumber(input_temperature.value)) {
        selected_values.temperature = input_temperature.value;
        updateButtonState(selected_values.temperature, selected_values.from_unit, selected_values.to_unit);
    }
})

convert_button.addEventListener('click', function(event) {
    let converter_temperature = 0

    if (selected_values.from_unit === 'Celseus') {
        if ( selected_values.to_unit === 'Fahrenheit') {
            converter_temperature = +selected_values.temperature * 1.8 + 32
        } else if (selected_values.to_unit === 'Kelvin') {
            converter_temperature = +selected_values.temperature + 273.15
        } else {
            converter_temperature = +selected_values.temperature
        }
    }

    if (selected_values.from_unit === 'Fahrenheit') {
        if ( selected_values.to_unit === 'Celseus') {
            converter_temperature = (+selected_values.temperature - 32) / 1.8;
        } else if (selected_values.to_unit === 'Kelvin') {
            converter_temperature = (+selected_values.temperature - 32) / 1.8 + 273.15
        } else {
            converter_temperature = +selected_values.temperature
        }
    }

    if (selected_values.from_unit === 'Kelvin') {
        if ( selected_values.to_unit === 'Celseus') {
            converter_temperature = +selected_values.temperature - 273.15;
        } else if (selected_values.to_unit === 'Fahrenheit') {
            converter_temperature = (+selected_values.temperature - 273.15) * 1.8 + 32
        } else {
            converter_temperature = +selected_values.temperature
        }
    }

    converter_temperature = Number(converter_temperature.toFixed(1));
    let convert_text = `${selected_values.temperature} ${selected_values.from_unit} is ${converter_temperature} ${selected_values.to_unit}`
    document.querySelector(".text-result-container").textContent = convert_text
})

function isNumber(value) {
    return !isNaN(value) && isFinite(value)
}

function work_in_dropdown(
    dropdown_container, 
    dropdown, 
    ul_dropdown, 
    triangle, 
    input_container, 
    input_dropdown,
    from_unit = null
) {
    let number_of_dropdown_item = -1;

    dropdown.classList.add('hidden');

    dropdown_to_unit_menu_html = ``;

    for (let i = 0; i < temperatures.length; i++) {
        dropdown_to_unit_menu_html += `
                    <li class='dropdown_menu_item'>
                        ${temperatures[i]}
                        <div class="check-mark-container hidden">
                            <span>✓</span>
                        </div>
                    </li>
                `;
    }

    ul_dropdown.innerHTML = dropdown_to_unit_menu_html;

    const li_all_dropdown_to_unit = dropdown.querySelectorAll("li");
    const mark_in_item_to_unit = dropdown.querySelectorAll(".check-mark-container");

    for (let i = 0; i < li_all_dropdown_to_unit.length; i++) {
        li_all_dropdown_to_unit[i].addEventListener('click', () => {
            if (number_of_dropdown_item != i) {
                if (number_of_dropdown_item === -1) {
                    mark_in_item_to_unit[i].classList.toggle('hidden')
                    number_of_dropdown_item = i;
                    input_dropdown.value = temperatures[i];
                } else {
                    mark_in_item_to_unit[number_of_dropdown_item].classList.add('hidden')
                    mark_in_item_to_unit[i].classList.toggle('hidden')
                    number_of_dropdown_item = i;
                    input_dropdown.value = temperatures[i];
                }
            } else {
                mark_in_item_to_unit[i].classList.add('hidden')
                input_dropdown.value = '';
                number_of_dropdown_item = -1;
            }
            triangle.classList.toggle('move')
            dropdown.classList.add('hidden');
            if (from_unit) {
                selected_values.from_unit = input_dropdown.value
            } else {
                selected_values.to_unit = input_dropdown.value
            }
            updateButtonState(selected_values.temperature, selected_values.from_unit, selected_values.to_unit);
        })
    }
};

function updateButtonState(temperature, from_unit, to_unit) {
    let allFilled = temperature !== undefined && from_unit !== undefined && to_unit !== undefined && temperature !== '' && from_unit !== '' && to_unit !== ''
    
    if (allFilled) {
        convert_button.classList.remove('disabled')
    } else {
        convert_button.classList.add('disabled')
    }
}

document.addEventListener('click', function(event) {
    choosing_a_dropdown_to_close(dropdown_from_unit, input_container_from_unit, triangle_from_unit);
    choosing_a_dropdown_to_close(dropdown_to_unit, input_container_to_unit, triangle_to_unit);
});

function choosing_a_dropdown_to_close(dropdown, input_container, triange) {
    if (!dropdown.classList.contains('hidden') && 
        !dropdown.contains(event.target) && 
        !input_container.contains(event.target)) {
        closeDropdown(dropdown, triange);
    }
} 

function closeDropdown(dropdown, triangle) {
    dropdown.classList.add('hidden');
    triangle.classList.remove('move');
}