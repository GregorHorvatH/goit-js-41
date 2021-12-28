const express = require('express');
const bodyParser = require('body-parser');
const { v4 } = require('uuid');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const todos = [
  {
    id: '70ec1601-9b2d-43e3-b26b-eb10d39d460e',
    label: 'wave culture',
    checked: true,
  },
  {
    id: 'e2768ea3-8f63-47db-94c6-a993c539f81a',
    label: 'купить молоко',
    checked: false,
  },
];

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:3000/todos
app.get('/todos', (req, res) => {
  // res.set({
  //   'Access-Control-Allow-Origin': '*', // *
  // });
  res.json(todos);
});

// app.delete('/todos', (req, res) => {
//   res.json(todos);
// });

app.post('/todos', (req, res) => {
  const newTodo = {
    id: v4(),
    ...req.body,
  };

  todos.push(newTodo);

  // res.set({
  //   'Access-Control-Allow-Origin': '*', // *
  // });
  res.status(200);
  res.json(newTodo);
});

app.get('/users', () => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
