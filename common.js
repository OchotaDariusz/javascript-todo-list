export function refreshItems() {
    let items = document.querySelectorAll('li');
    removeOnClick(items);
}

const ul = document.querySelector('ul');

const newTodo = document.querySelector('[name="new-todo"]');

function removeOnClick(items) {
    items.forEach(item => {
        item.addEventListener('click', event => {
            event.target.remove();
        });
    });
}

export function addTodo() {
    const li = document.createElement('li');
    li.textContent = `${newTodo.value}`;
    ul.appendChild(li);
    refreshItems();
    newTodo.value = '';
}
