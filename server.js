const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
