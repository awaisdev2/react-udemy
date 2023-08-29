const express = require('express');
const app = express();

const port = 7000

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});