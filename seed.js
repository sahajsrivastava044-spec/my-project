require('dotenv').config();
const mongoose = require('mongoose');
const express=require('express');
const app=express()
// Ensure these paths match where you put your models
const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Song = require('./models/Song');
const User = require('./models/User');
const Playlist = require('./models/Playlist');
const authRoutes=require('./scripts/routes/auth')
app.use(express.json());

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Clear existing data
    // await Promise.all([
    //   Artist.deleteMany({}), Album.deleteMany({}), 
    //   Song.deleteMany({}), User.deleteMany({}), Playlist.deleteMany({})
    // ]);

    // 2. Create Artist
    // const artist = await Artist.create({ name: 'Daft Punk', genre: 'Electronic' });
    
    // 3. Create Album (Linked to Artist)
    // const album = await Album.create({
    //   title: 'Discovery',
    //   releaseYear: 2001,
    //   artist: artist._id 
    // });

    // 4. Create Song (Linked to Album and Artist)
    // const song = await Song.create({
    //   title: 'One More Time',
    //   duration: 320,
    //   album: album._id,
    //   artist: artist._id
    // });

    // 5. Create User
    

    // 6. Create Playlist (Linked to User and Songs)
    // await Playlist.create({
    //   name: 'Gym Jams',
    //   user: user._id,
    //   songs: [song._id]
    // });

    // console.log(' Seeding Complete!');
    // process.exit(0);
  } catch (error) {
    console.error(' Seeding Failed:', error);
    process.exit(1);
  }
}

seed();
app.use('/api/auth', authRoutes);

app.listen(3000,()=>{
  console.log(`http://localhost:3000`);
})