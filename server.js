const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, MERNa Ma!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { getAllInstructors } = require('../controllers/instructorController');

router .get('/', getAllInstructors);

module.exports = router;