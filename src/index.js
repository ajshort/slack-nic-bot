const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.end('Hello, world');
});

const listener = app.listen(port, () => {
  console.log(`🚀 Listening on port ${listener.address().port}`)
});
