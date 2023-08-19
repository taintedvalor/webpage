const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

// Store the problems in an array (for demonstration purposes; use a database in production)
const problems = [];

// Function to generate a unique ID for a problem
function generateProblemId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Route to retrieve all problems
app.get('/problems', (req, res) => {
    res.json(problems);
});

// Route to add a new problem
app.post('/problems', (req, res) => {
    const newProblem = req.body;
    newProblem.id = generateProblemId();
    problems.push(newProblem);
    res.status(201).json(newProblem);
});

// Route to update a problem's status
app.patch('/problems/:id', (req, res) => {
    const idToUpdate = req.params.id;
    const { status } = req.body;
    
    const problemIndex = problems.findIndex(problem => problem.id === idToUpdate);

    if (problemIndex === -1) {
        res.sendStatus(404); // Not Found
    } else {
        problems[problemIndex].status = status;
        res.sendStatus(204); // No Content (successful update)
    }
});

// Route to delete a problem
app.delete('/problems/:id', (req, res) => {
    const idToDelete = req.params.id;
    const problemIndex = problems.findIndex(problem => problem.id === idToDelete);

    if (problemIndex === -1) {
        res.sendStatus(404); // Not Found
    } else {
        problems.splice(problemIndex, 1);
        res.sendStatus(204); // No Content (successful delete)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
