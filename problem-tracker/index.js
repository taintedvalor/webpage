const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Store problem reports in memory (replace with a database in production)
const problems = [];
let modPackVersion = "1.0"; // Default mod pack version

// Serve the problems.html page
app.get('/problems', (req, res) => {
    res.sendFile(__dirname + '/public/problems.html');
});

// Serve the inputconsole.html page
app.get('/inputconsole', (req, res) => {
    res.sendFile(__dirname + '/public/inputconsole.html');
});

// Endpoint for submitting a problem report
app.post('/submitProblem', (req, res) => {
    const { title, description, status } = req.body;
    if (title && description) {
        problems.push({ title, description, status });
        res.sendStatus(200);
    } else {
        res.sendStatus(400); // Bad Request
    }
});

// Endpoint for getting the list of problems
app.get('/getProblems', (req, res) => {
    res.json(problems);
});

// Endpoint for updating the mod pack version
app.post('/updateModPackVersion', (req, res) => {
    const { version } = req.body;
    if (version) {
        modPackVersion = version;
        res.sendStatus(200);
    } else {
        res.sendStatus(400); // Bad Request
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
