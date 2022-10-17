const tasks = ['zadanie - 1',
    'zadanie - 2',
    'zadanie - 3',
    'zadanie - 4',
    'zadanie - 5',
    'zadanie - 6',
    'zadanie - 7',
    'zadanie - 8',
    'zadanie - 9',
    'zadanie - 10',
    'zadanie - 11',
    'zadanie - 12',
    'zadanie - 13'
];

let count = 0;
const taskView = [...tasks];
let taskIPCount = taskView.length;

const taskList = document.querySelector('.taskList');
const inputSearch = document.querySelector('.inputSearch');
const formAdd = document.querySelector('.add');
const inputAdd = document.querySelector('.inputAdd');
const countSpan = document.querySelector('.taskEndSpan');
const taskIPSpan = document.querySelector('.taskIPSpan');

taskIPSpan.textContent = taskIPCount;

const addTask = (e) => {
    e.preventDefault();
    if (!inputAdd.value) return;
    console.log(inputAdd.value);
    taskView.push(inputAdd.value);
    inputAdd.value = '';
    deleteViewTask();
    viewTask(taskView);
    taskIPCount++;
    taskIPSpan.textContent = taskIPCount;
}

const deleteTask = (e) => {
    const delTask = e.target.dataset.option;
    console.log(delTask);
    taskView.splice(delTask, 1);
    console.log(e.target.parentNode.outerText);
    deleteViewTask();
    viewTask(taskView);
    inputSearch.value = '';
    count++;
    countSpan.textContent = count;
    taskIPCount--;
    taskIPSpan.textContent = taskIPCount;
}

function deleteViewTask() {
    taskList.textContent = '';
}

const filterTask = (e) => {
    deleteViewTask();
    const filter = e.target.value.toLowerCase();
    const taskViewFilter = taskView.filter(task => task.toLowerCase().includes(filter));
    viewTask(taskViewFilter);
}

function viewTask(taskView) {
    for (i = 0; i < taskView.length; i++) {
        const task = document.createElement('li');
        task.innerHTML = '<span>' + taskView[i] + '</span>' + `<iconify-icon data-option=${i} class = "iconifyBin" icon = "icomoon-free:bin" width="24"> </iconify-icon>`;
        task.setAttribute('data-option', i);
        taskList.appendChild(task);
    };
    const btns = [...document.querySelectorAll('.iconifyBin')];
    btns.forEach(btn => {
        btn.addEventListener('click', deleteTask);
    })
}


formAdd.addEventListener('submit', addTask);
inputSearch.addEventListener('input', filterTask);
viewTask(taskView);