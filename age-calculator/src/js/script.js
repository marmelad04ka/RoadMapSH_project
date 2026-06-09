const input_date = document.querySelector(".input-date input");
const calculate_button = document.querySelector(".button-calculate-container button");
const calculate_age_text = document.querySelector('.calculated-age');

new AirDatepicker(input_date, {
    dateFormat: 'dd/MM/yyyy',
    maxDate: new Date().setDate(new Date().getDate() - 1),
    autoClose: true,
    view: 'months',
    minView: 'days',
});

calculate_button.addEventListener('click', function(event) {
    if (!input_date.value) {
        calculate_age_text.textContent = 'Please, select date'
        return;
    }

    const start = luxon.DateTime.fromFormat(input_date.value, 'dd/MM/yyyy');
    const end = luxon.DateTime.now();
    const diff = end.diff(start, ['years', 'months', 'days'])
    
    let str_year = ''
    let str_month = ''
    let str_day = ''

    if (diff.years != 0) {
        str_year = diff.years + ' years'
    }
    if (diff.months != 0) {
        str_month = diff.months + ' months'
    }
    if (diff.days != 0) {
        str_day = Math.trunc(diff.days) + ' days'
    }
    if (diff.days < 1 && diff.days > 0) {
        str_day = ''
    }

    calculate_age_text.textContent = `You are ${str_year} ${str_month} ${str_day} old`

    input_date.value = '';
});