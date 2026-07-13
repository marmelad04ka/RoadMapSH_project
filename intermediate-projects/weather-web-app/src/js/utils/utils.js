export function switchClasses({container = [], classAdd = [], classRemove = []}) {
    for (let i = 0; i < container.length; i++) {
        if (classRemove.length > 0) {
            container[i].classList.remove(...classRemove);
        }

        if (classAdd.length > 0) {
            container[i].classList.add(...classAdd);
        }
    }
}

export function createTime({number_of_days}) {
    let hourly = [];
    let hour;

    for (let day = 0; day < number_of_days; day++) {
        for (let i = 0; i < 24; i++) {
            const hour = i < 10 ? '0' + i + ':00' : i + ':00';
            hourly.push(hour);
        }
    }
    return hourly;
}