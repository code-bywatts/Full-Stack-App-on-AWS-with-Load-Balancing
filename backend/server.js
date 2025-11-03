const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from AWS EC2 Backend!',
    servedBy: os.hostname()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
