const mongoose = require('mongoose');
const Property = require('../models/Property');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const sampleProperties = [
  {
    title: "Modern Apartment in City Center",
    location: "Downtown, City",
    price: 250000,
    bedrooms: 2,
    squareFeet: 1200,
    description: "Beautiful modern apartment with city views",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  {
    title: "Suburban Family Home",
    location: "Pleasant Valley",
    price: 450000,
    bedrooms: 4,
    squareFeet: 2500,
    description: "Spacious family home with large backyard",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    title: "Luxury Penthouse",
    location: "Skyline Avenue",
    price: 800000,
    bedrooms: 3,
    squareFeet: 3000,
    description: "Luxurious penthouse with panoramic views",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  }
];

const insertSampleData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Property.deleteMany({});
    console.log('Cleared existing properties');

    // Insert new data
    const result = await Property.insertMany(sampleProperties);
    console.log(`Inserted ${result.length} properties`);

    console.log('Sample data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error inserting sample data:', error);
    process.exit(1);
  }
};

insertSampleData();
