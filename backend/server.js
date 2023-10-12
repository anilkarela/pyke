const express = require('express')

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, this is your backend server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
