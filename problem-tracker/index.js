const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// In-memory storage for problems (you can replace this with a database)
const problems = [];

// API endpoint to add a new problem
app.post('/api/problems', (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
        return res.status(400).json({ error: 'Title, description, and status are required.' });
    }

    const newProblem = {
        id: problems.length + 1,
        title,
        description,
        status
    };

    problems.push(newProblem);

    res.status(201).json(newProblem);
});

// API endpoint to get all problems
app.get('/api/problems', (req, res) => {
    res.json(problems);
});

// API endpoint to update the status of a problem by ID
app.put('/api/problems/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const problem = problems.find(p => p.id === parseInt(id));

    if (!problem) {
        return res.status(404).json({ error: 'Problem not found.' });
    }

    problem.status = status;

    res.json(problem);
});

// API endpoint to delete a problem by ID
app.delete('/api/problems/:id', (req, res) => {
    const { id } = req.params;

    const index = problems.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Problem not found.' });
    }

    problems.splice(index, 1);

    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
