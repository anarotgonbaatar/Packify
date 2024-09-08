const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/packify');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    attributes: [String],
});

const Item = mongoose.model('Item', itemSchema);

const items = [
    { name: 'Tent', category: 'equipment', attributes: ['camping', 'backpacking'] },
    { name: 'Sleeping Bag', category: 'equipment', attributes: ['camping', 'backpacking', 'cold-weather'] },
    { name: 'Sunscreen', category: 'toiletry', attributes: ['sunny', 'sightseeing'] },
    { name: 'Hiking Boots', category: 'clothing', attributes: ['hiking'] },
    { name: 'Camera', category: 'equipment', attributes: ['photography', 'sightseeing'] },
    { name: 'Swimwear', category: 'clothing', attributes: ['swimming', 'snorkeling'] },
    { name: 'Rain Jacket', category: 'clothing', attributes: ['rainy', 'hiking'] },
    { name: 'Medications', category: 'toiletry', attributes: ['medications'] },
    { name: 'Cycling Helmet', category: 'equipment', attributes: ['cycling'] },
    { name: 'Off-road Gear', category: 'equipment', attributes: ['off-roading'] }
];

Item.insertMany(items)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting data:', err);
    });
