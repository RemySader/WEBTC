const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

let submissions = [];
let userMessages = [];

// Endpoint to receive user submissions
app.post('/submit', (req, res) => {
  const submission = req.body;
  submissions.push({ ...submission, id: Date.now() });
  res.json({ message: 'Submission sent.' });
});

// Endpoint to get all submissions for the admin
app.get('/submissions', (req, res) => {
  res.json(submissions);
});

app.put('/approve/:id', (req, res) => {
  const submissionId = parseInt(req.params.id, 10);
  const approvedSubmission = submissions.find((submission) => submission.id === submissionId);

  if (approvedSubmission) {
    approvedSubmission.status = 'approved';

    userMessages.push({
      userId: approvedSubmission.id,
      message: 'Approved Request!',
    });

    res.json({ message: 'Submission approved.' });
  } else {
    res.status(404).json({ error: 'Submission not found.' });
  }
});

app.put('/reject/:id', (req, res) => {
  const submissionId = parseInt(req.params.id, 10);
  submissions = submissions.map((submission) =>
    submission.id === submissionId ? { ...submission, status: 'rejected' } : submission
  );
  res.json({ message: 'Rejected.' });
});

app.get('/user-message/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userMessage = userMessages.find((message) => message.userId === userId);

  if (userMessage) {
    res.json(userMessage);
  } else {
    res.status(404).json({ error: 'User message not found.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
