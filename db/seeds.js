const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Uplift = require('../models/uplift');

const upliftData = [{
  body: 'https://healthruwords.com/wp-content/uploads/2017/11/Healthruwords.com_-_Inspirational_Images_-_Always-Higher.jpg',
  category: 'quote'
}, {
  body: 'https://healthruwords.com/wp-content/uploads/2017/11/Healthruwords.com_-_Inspirational_Images_-_Action-in-Attraction.jpg',
  category: 'quote'
}, {
  body: 'https://healthruwords.com/wp-content/uploads/2015/01/Healthruwords.com_-_Inspirational_Pictures_-_Awakening.jpg',
  category: 'quote'
}, {
  body: 'https://farm5.staticflickr.com/4562/24983676008_ea0fff0576.jpg',
  category: 'picture'
}, {
  body: 'https://flic.kr/p/E4CE51',
  category: 'picture'
}, {
  body: 'https://flic.kr/p/HeKujx',
  category: 'picture'
}, {
  body: 'https://media1.giphy.com/media/26u4a7hLvuO4feCkg/giphy.gif',
  category: 'gif'
}, {
  body: 'https://media3.giphy.com/media/TXJiSN8vCERuE/giphy.gif',
  category: 'gif'
}, {
  body: 'https://media2.giphy.com/media/QBNrfOFxHv10A/giphy.gif',
  category: 'gif'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Uplift.create(upliftData))
  .then(uplifts => console.log(`${uplifts.length} uplifts created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
