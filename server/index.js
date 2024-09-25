const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/resume', (req, res) => {
  res.json({ message: "Resume endpoint is working" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});