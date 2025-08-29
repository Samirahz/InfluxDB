const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// app.get('/api/hello', (req, res) => {
//   res.send('Hello from backend!');
// });

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
