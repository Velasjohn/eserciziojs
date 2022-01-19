const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let countid = 2;

let todos = [
    { id: 1, text: 'todo di prova', completed: '' },
    { id: 2, text: 'todo di prova', completed: 'completed' }
];

app.get('/todos', (req, res) => {
    res.json(todos)
});

app.post('/todos', (req, res) => {
    let todo = req.body; // qui ci aggiungo solo testo 
    todo.completed = ''; // testo + completed: ''
    todo.id = countid++; // id + testo + completed
    todos.push(todo);
    res.json('todo inserito con successo');
});

app.delete('/todos:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(element => element.id != id)
    res.json('todo inserito con successo');
});

app.delete('/todos:completed', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(element => element.id === 'completed')
    res.json('todo completed cancellati');
});


app.patch('/todos:id', (req, res) => {
    const id = req.params.id;
    let todo = todos.find(element => element.id == id);
    todo.completed = todo.completed == 'completed' ? '' : 'completed';
    res.json('Todo completed cancellati ')
});

/*app.put('/todos:id', (req, res) => {
    const id = req.params.id;
    let updateTodo = req.body
    let todo = todos.find(element => element.id == id);
    Object.assign(todo, updateTodo)
});*/

app.listen(3000, () => console.log('server attivo sulla porta 3000!!'))