document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.querySelector('.add-button');
    const todoList = document.querySelector('.todo-list');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim(); // удаляем пробелы в начале и в конце
        if (taskText) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const textSpan = document.createElement('span');
            textSpan.textContent = taskText;

            const buttonsSpan = document.createElement('span');
            buttonsSpan.className = 'buttons';

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Done';
            completeButton.className = 'complete-button';
            completeButton.addEventListener('click', () => {
                textSpan.classList.toggle('completed');
                todoItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            buttonsSpan.appendChild(completeButton); // добавляет узел в конец списка дочерних элементов указанного родительского узла.
            buttonsSpan.appendChild(deleteButton);

            todoItem.appendChild(textSpan);
            todoItem.appendChild(buttonsSpan);

            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    });

    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('click', (e) => {
        if (e.target.classList.contains('theme')) { // служит для проверки, является ли заданный узел (или элемент) потомком другого узла (или элемента)
            document.body.className = '';
            const theme = e.target.getAttribute('data-theme'); // получения значения указанного атрибута элемента
            document.body.classList.add(theme);
        }
    });
});
