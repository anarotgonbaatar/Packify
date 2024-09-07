const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/packify');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define item schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  attributes: [String],
});

const Item = mongoose.model('Item', itemSchema);

// Route to get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add new item
app.post('/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    category: req.body.category,
    attributes: req.body.attributes,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to generate packing list
app.post('/generate-list', async (req, res) => {
  const { tripType, activities, weather, days } = req.body;
  try {
    const items = await Item.find({
      attributes: { $in: [...tripType, ...activities, ...weather] }
    });
    // Add logic for items based on days
    const packingList = items.map(item => ({
      ...item.toObject(),
      quantity: item.category === 'clothing' ? days : 1
    }));
    res.json({ packingList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});