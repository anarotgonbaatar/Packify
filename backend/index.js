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
    const { activities, weather, days, tempHigh, tempLow } = req.body;
    try {
        // Find items that match attributes
        const items = await Item.find({
        attributes: { $in: [...activities, ...weather] }
        });

        // Logic for filtering items based on temperature if needed
        const filteredItems = items.filter(item => {
            if (item.attributes.includes('cold-weather') && tempLow < 40) return true;
            if (item.attributes.includes('hot-weather') && tempHigh > 80) return true;
            // Include more temperature-related filtering if needed
            return !item.attributes.includes('cold-weather') && !item.attributes.includes('hot-weather');
        });

        // Remove duplicates
        const uniqueItems = filteredItems.reduce(( acc, item ) => {
            const foundItem = acc.find( i => i.name === item.name );
            if ( !foundItem ) acc.push( item );
            return acc;
        }, []);

        // Quantified logic
        const packingList = filteredItems.map( item => ({
            ...item.toObject(),
            quantity: item.quantified ? days: 1 // If quantified: true, multiply by 'days'
        }))
        
        res.json({ packingList });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});