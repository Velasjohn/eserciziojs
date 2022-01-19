"use strict";
const urlAPI = 'http://localhost:3000/todos';
let getTodos = () => {
    fetch(urlAPI).then((response) => response.json()).then(json => console.log(json));
};
let createTodo = () => {
};
let removeTodo = () => {
};
let completeTodo = () => {
};
let removeCompletedTodo = () => {
};
getTodos();
