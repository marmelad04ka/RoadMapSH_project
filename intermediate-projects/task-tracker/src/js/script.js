let task_list = [];

const add_button = document.querySelector(".button-container");
const input = document.querySelector(".input-container input");
const task_list_container = document.querySelector(".task-list-container");

let task_itemHTML = ``;
const checked = '';

loadTasks()

renderTasks()

document.addEventListener('click', (e) => {
  if (e.target.closest('.button-garbage-container button')) {
    const taskElement = e.target.closest('.tasks');
    const id = Number(taskElement.dataset.taskId);
    deleteTask(id);
  }

  if (e.target.closest('.checkbox-container label')) {
    const taskElement = e.target.closest('.tasks');
    const id = Number(taskElement.dataset.taskId);
    const task = task_list.find(t => t.id === id);
    if (task) {
        task.status = task.status === 'done' ? 'in_work' : 'done';
        renderTasks();
        save_task();
    }
  }
});

input.addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
        event.preventDefault();
        handleAddTask();
    }
});

add_button.addEventListener('click', function(event) {
    handleAddTask();
    
});

function create_html(item) {
    const checked = item.status === 'done' ? 'checked' : '';

    task_itemHTML += `<div class="tasks" data-task-id="${item.id}">
                <div class="checkbox-container">
                    <input type="checkbox" id="task-${item.id}" name="task_checkbox" value="yes" ${checked}>
                    <label for="task-${item.id}" class="custom-checkbox"></label>
                </div>
                
                <div class="task-text-container ${item.status}">
                    ${item.text}
                </div>

                <div class="button-garbage-container">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                        stroke-linejoin="round" class="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        </button>
                </div>
            </div>
            <div class="divide-container">

            </div>`
}

function loadTasks() {
    const savedTasks = localStorage.getItem('task_list');
if (savedTasks) {
    task_list = JSON.parse(savedTasks);
} else {
    localStorage.setItem('task_list', JSON.stringify([]));
}
}

function save_task() {
    localStorage.setItem('task_list', JSON.stringify(task_list));
}

function add_task(id, text) {
    const new_task = {id:id, text:text, status:'in_work'}
    task_list.unshift(new_task);
}

function deleteTask(id) {
    task_list = task_list.filter(t => t.id !== id);
    save_task();
    renderTasks();
}

function renderTasks() {
    task_itemHTML = '';
    
    for (let i = 0; i < task_list.length; i++) {
        create_html(task_list[i]);
    }
    task_list_container.innerHTML = task_itemHTML;
    
    if (task_list.length === 0) {
        task_list_container.classList.add('hidden');
    } else {
        task_list_container.classList.remove('hidden');
    }
}

function handleAddTask() {
    if (input.value === '') {
        return;
    }

    if (task_list.length === 0) {
        task_list_container.classList.remove('hidden');
    }

    const newId = task_list.length > 0 ? Math.max(...task_list.map(t => t.id)) + 1 : 1;
    add_task(id=newId, text=input.value);
    save_task()

    renderTasks();

    input.value = '';
}