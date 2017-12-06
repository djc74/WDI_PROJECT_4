const mongoose = require('mongoose');

const upliftSchema = mongoose.schema({
  body: {type: String, required: true},
  category: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('uplift', upliftSchema);
