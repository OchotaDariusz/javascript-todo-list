import { removeTodo, addTodo } from './common.js';

const ul = document.querySelector('ul');

const button = document.querySelector('button');

/**
 * Remove existing "TODO".
 */
ul.addEventListener('click', event => {
    removeTodo(event.target);
});

/**
 * Add new "TODO".
 */
button.addEventListener('click', addTodo);
