require('dotenv').config();
const mongoose = require('mongoose');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Song = require('./models/Song');
const User = require('./models/User');
const Playlist = require('./models/Playlist');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // your seed logic

    console.log('Seeding Complete!');
    process.exit(0);

  } catch (error) {
    console.error('Seeding Failed:', error);
    process.exit(1);
  }
}

seed();