const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8181;


// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
