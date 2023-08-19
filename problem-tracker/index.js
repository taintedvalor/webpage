 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Store the problems in an array (this is for demonstration purposes, you should use a database in a production environment)
const problems = [];

app.get('/problems', (req, res) => {
  res.json(problems);
});

app.post('/problems', express.json(), (req, res) => {
  const newProblem = req.body;
  problems.push(newProblem);
  res.sendStatus(201); // Created
});

app.delete('/problems/:id', (req, res) => {
  const idToDelete = req.params.id;
  const index = problems.findIndex(problem => problem.id === idToDelete);
  if (index !== -1) {
    problems.splice(index, 1);
    res.sendStatus(204); // No Content (successful delete)
  } else {
    res.sendStatus(404); // Not Found
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
