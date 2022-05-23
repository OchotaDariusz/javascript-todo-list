const ul = document.querySelector('ul');

const inputTodo = document.querySelector('[name="new-todo"]');

/**
 * Remove element if its tag name is "li".
 * @param {event.target} item 
 */
export const removeTodo = item => {
    if(item.tagName == "LI"){
        item.remove();
    }
}

/**
 * Add new list item based on text input.
 */
export const addTodo = () => {
    const li = document.createElement('li');
    li.textContent = `${inputTodo.value}`;
    ul.appendChild(li);
    inputTodo.value = '';
}
