const express = require('express');
const morgan = require('morgan');

const app = express();

let mockData = [
    {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
    },
    {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
    },
    {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
    }
];

app.get('/', function(req, res) {
    
    let generalObject = {
        status: 'ok'
    };
    res.send(generalObject);
});

app.get('/api/TodoItems', function(req, res){
    res.send(mockData);
});

app.get('/api/TodoItems/:number', function(req, res){
    res.send(mockData[1]);
});

app.post('/api/TodoItems/', function(req, res){
    
    let newData = {
        todoItemId: 0,
        name: 'sandwhich',
        priority: 3,
        completed: false
    };
    mockData.push(newData);
    res.status(201).send(newData);
});

app.delete('/api/TodoItems/:number', function(req, res){
    let deletedData = mockData.pop();
    res.status(200).send(deletedData);
});


// add your code here

module.exports = app;
