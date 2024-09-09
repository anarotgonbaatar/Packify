const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/packify');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const itemSchema = new mongoose.Schema({
    name: String,
    attributes: [String],
    quantified: Boolean,
    weather: [String],
});

const Item = mongoose.model('Item', itemSchema);

const items = [
    // Outdoors
    // Equipment
    { name: 'Tent', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Ground Tarp', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Sleeping Bag', quantified: false, weather: [], attributes: ['camping', 'backpacking', 'cold-weather'] },
    { name: 'Sleeping Pad', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Pillow', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Stove', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Fuel Canister', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Lighter', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Pots and Pans', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Eating Utensils', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Cups and Bowls', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Cooler', quantified: false, weather: [], attributes: ['camping'] },
    { name: 'Lamp', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Backpack', quantified: false, weather: [], attributes: ['hiking', 'backpacking'] },
    { name: 'Walking Poles', quantified: false, weather: [], attributes: ['hiking'] },

    // Clothes
    { name: 'Hiking Boots', quantified: false, weather: [], attributes: ['hiking'] },
    { name: 'Moisture-wicking Shirt', quantified: false, weather: [], attributes: ['hiking', 'backpacking'] },
    { name: 'Insulating Layer', quantified: false, weather: ['cold'], attributes: ['hiking', 'camping', 'backpacking'] },
    { name: 'Rain Jacket', quantified: false, weather: ['rainy'], attributes: ['hiking', 'backpacking'] },
    { name: 'Quick-dry Pants', quantified: false, weather: [], attributes: ['hiking', 'backpacking'] },
    { name: 'Socks', quantified: true, weather: [], attributes: ['hiking', 'backpacking'] },

    // Accessories
    { name: 'Sunglasses', quantified: false, weather: ['sunny'], attributes: ['hiking', 'camping', 'backpacking'] },
    { name: 'Hat', quantified: false, weather: ['sunny'], attributes: ['hiking', 'camping', 'backpacking'] },
    { name: 'Headlamp', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Map and Compass', quantified: false, weather: [], attributes: ['hiking', 'backpacking'] },

    // Hygiene
    { name: 'Toothbrush', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Biodegradable Soap', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },
    { name: 'Quick-dry Towel', quantified: false, weather: [], attributes: ['camping', 'backpacking'] },

    // Meds and Supplements
    { name: 'Sunscreen', quantified: false, weather: ['sunny'], attributes: ['hiking', 'camping', 'backpacking'] },
    { name: 'Insect Repellent', quantified: false, weather: [], attributes: ['camping', 'hiking'] },
    { name: 'First-Aid Kit', quantified: false, weather: [], attributes: ['hiking', 'camping', 'backpacking'] },
    { name: 'Medications', quantified: true, weather: [], attributes: ['camping', 'backpacking'] },

    // Photography
    { name: 'Camera', quantified: false, weather: [], attributes: ['photography'] },
    { name: 'Tripod', quantified: false, weather: [], attributes: ['photography'] },
    { name: 'Extra Batteries', quantified: true, weather: [], attributes: ['photography'] },
    
    // Water Activities
    // Equipment
    { name: 'Swimwear', quantified: false, weather: [], attributes: ['swimming', 'snorkeling', 'scuba diving'] },
    { name: 'Snorkel and Mask', quantified: false, weather: [], attributes: ['snorkeling'] },
    { name: 'Fins', quantified: false, weather: [], attributes: ['snorkeling', 'scuba diving'] },
    { name: 'Wetsuit', quantified: false, weather: [], attributes: ['scuba diving', 'surfing'] },
    { name: 'Fishing Rod', quantified: false, weather: [], attributes: ['fishing'] },
    { name: 'Fishing Tackle', quantified: false, weather: [], attributes: ['fishing'] },
    { name: 'Kayak', quantified: false, weather: [], attributes: ['kayaking'] },
    { name: 'Paddle', quantified: false, weather: [], attributes: ['kayaking'] },
    { name: 'Life Jacket', quantified: false, weather: [], attributes: ['kayaking', 'surfing'] },
    { name: 'Surfboard', quantified: false, weather: [], attributes: ['surfing'] },
    { name: 'Dive Tank', quantified: false, weather: [], attributes: ['scuba diving'] },

    // Clothes
    { name: 'Water Shoes', quantified: false, weather: [], attributes: ['snorkeling', 'swimming', 'kayaking'] },

    // Accessories
    { name: 'Waterproof Bag', quantified: false, weather: [], attributes: ['kayaking', 'snorkeling'] },
    
    // Mountain Activities
    // Equipment
    { name: 'Climbing Harness', quantified: false, weather: [], attributes: ['rock climbing'] },
    { name: 'Climbing Rope', quantified: false, weather: [], attributes: ['rock climbing'] },
    { name: 'Ski Poles', quantified: false, weather: ['snowy'], attributes: ['skiing'] },
    { name: 'Skis', quantified: false, weather: ['snowy'], attributes: ['skiing'] },
    { name: 'Snowboard', quantified: false, weather: ['snowy'], attributes: ['snowboarding'] },
    { name: 'Mountain Bike', quantified: false, weather: [], attributes: ['mountain biking'] },
    { name: 'Helmet', quantified: false, weather: [], attributes: ['mountain biking', 'rock climbing', 'skiing', 'snowboarding'] },
    { name: 'Saddle', quantified: false, weather: [], attributes: ['horseback riding'] },

    // Clothes
    { name: 'Climbing Shoes', quantified: false, weather: [], attributes: ['rock climbing'] },
    { name: 'Ski Jacket', quantified: false, weather: ['cold'], attributes: ['skiing', 'snowboarding'] },
    { name: 'Ski Pants', quantified: false, weather: ['cold'], attributes: ['skiing', 'snowboarding'] },
    { name: 'Goggles', quantified: false, weather: ['snowy'], attributes: ['skiing', 'snowboarding'] },

    // Accessories
    { name: 'Ski Gloves', quantified: false, weather: ['cold'], attributes: ['skiing', 'snowboarding'] },
    { name: 'Carabiners', quantified: false, weather: [], attributes: ['rock climbing'] },
    
    // Motorsports
    // Equipment
    { name: 'Motorcycle Helmet', quantified: false, weather: [], attributes: ['motorcycling'] },
    { name: 'Off-road Gear', quantified: false, weather: [], attributes: ['off-roading'] },
    { name: 'ATV Helmet', quantified: false, weather: [], attributes: ['ATV riding'] },
    { name: 'ATV Gloves', quantified: false, weather: [], attributes: ['ATV riding'] },

    // Clothes
    { name: 'Riding Jacket', quantified: false, weather: [], attributes: ['motorcycling', 'off-roading'] },
    { name: 'Riding Pants', quantified: false, weather: [], attributes: ['motorcycling', 'off-roading'] },
    
    // Athletic & Fitness
    // Equipment
    { name: 'Running Shoes', quantified: false, weather: [], attributes: ['running', 'trail running'] },
    { name: 'Cycling Helmet', quantified: false, weather: [], attributes: ['cycling'] },
    { name: 'Bicycle', quantified: false, weather: [], attributes: ['cycling'] },
    { name: 'Yoga Mat', quantified: false, weather: [], attributes: ['yoga'] },

    // Clothes
    { name: 'Moisture-wicking Clothing', quantified: false, weather: [], attributes: ['running', 'cycling', 'yoga'] },
    { name: 'Cycling Shorts', quantified: false, weather: [], attributes: ['cycling'] },
    
    // Hunting & Wildlife
    // Equipment
    { name: 'Binoculars', quantified: false, weather: [], attributes: ['bird watching', 'wildlife tracking'] },
    { name: 'Rifle', quantified: false, weather: [], attributes: ['hunting'] },
    { name: 'Bow and Arrows', quantified: false, weather: [], attributes: ['hunting'] },
];

Item.insertMany(items)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting data:', err);
    });
