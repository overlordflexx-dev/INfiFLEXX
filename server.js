const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Sample initial job feed for your live cyber/daily tasks
let jobs = [
  { id: 1, title: "Instant Cyber: KRA Pin Retrieval & Typing", payout: "Ksh 350", type: "Cyber Service", time: "2 mins ago" },
  { id: 2, title: "Daily Gig: Office Document Formatting", payout: "Ksh 800", type: "Quick Task", time: "10 mins ago" }
];

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
  const newJob = { id: Date.now(), ...req.body, time: "Just now" };
  jobs.unshift(newJob);
  res.json(newJob);
});

app.listen(PORT, () => {
  console.log(`Flexx server running on port ${PORT}`);
});

