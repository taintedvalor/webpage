const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON and URL-encoded body parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Store the list of problems in memory (you might want to use a database in a real application)
const problems = [];

// Define your routes

// Route to get the list of problems
app.get('/api/problems', (req, res) => {
  res.json(problems);
});

// Route to add a new problem
app.post('/api/problems', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }

  const newProblem = {
    title,
    description,
    status: 'unhandled',
  };
  problems.push(newProblem);
  res.status(201).json(newProblem);
});

// Route to update the status of a problem
app.patch('/api/problems/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const problem = problems[id];

  if (!problem) {
    return res.status(404).json({ error: 'Problem not found.' });
  }

  problem.status = status;
  res.json(problem);
});

// Route to delete a problem
app.delete('/api/problems/:id', (req, res) => {
  const { id } = req.params;

  if (!problems[id]) {
    return res.status(404).json({ error: 'Problem not found.' });
  }

  problems.splice(id, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
