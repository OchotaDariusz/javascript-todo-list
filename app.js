import { refreshItems, addTodo } from './common.js';

refreshItems()

const button = document.querySelector('button');

button.addEventListener('click', () => {
    addTodo();
});
