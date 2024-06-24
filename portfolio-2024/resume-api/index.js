const express = require('express');
const app = express();
const port = 3000;

app.get('/resume', (req, res) => {
  res.json(resume);
});

app.listen(port, () => {
  console.log(`Resume API listening at http://localhost:${port}`);
});