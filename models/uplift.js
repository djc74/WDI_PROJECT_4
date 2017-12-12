const mongoose = require('mongoose');

const upliftSchema = mongoose.Schema({
  body: {type: String},
  category: {type: String},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('uplift', upliftSchema);
