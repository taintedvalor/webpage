const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const problems = []; // Array to store the problems

app.use(express.static('public')); // Assuming your static files are in the 'public' directory

app.get('/problems', (req, res) => {
    res.json(problems);
});

app.post('/problems', (req, res) => {
    const { title, description } = req.body;

    if (title && description) {
        const newProblem = {
            title,
            description,
            status: 'unhandled'
        };

        problems.push(newProblem);
        res.status(201).json(newProblem);
    } else {
        res.status(400).json({ error: 'Title and description are required.' });
    }
});

app.put('/problems/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    if (!isNaN(id) && status) {
        if (id >= 0 && id < problems.length) {
            problems[id].status = status;
            res.json(problems[id]);
        } else {
            res.status(404).json({ error: 'Problem not found.' });
        }
    } else {
        res.status(400).json({ error: 'Invalid request.' });
    }
});

app.delete('/problems/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (!isNaN(id)) {
        if (id >= 0 && id < problems.length) {
            const deletedProblem = problems.splice(id, 1);
            res.json(deletedProblem);
        } else {
            res.status(404).json({ error: 'Problem not found.' });
        }
    } else {
        res.status(400).json({ error: 'Invalid request.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
