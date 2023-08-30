const express = require('express');
const connectToMongo = require('./db');
const Contact = require('./models/contact'); // Import the Contact model
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');

connectToMongo();
const port = 7000;
app.use(express.json());
app.use(cors());

app.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.send(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Udemy app listening on http://localhost:${port}`);
});
