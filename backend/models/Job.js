const mongoose = require('mongoose');
const statusEnum = ['applied', 'interview', 'offer', 'rejected'];
const statusHistorySchema = new mongoose.Schema({
  status: { type: String, enum: statusEnum },
  date: { type: Date, default: Date.now }
});
const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: { type: String, enum: statusEnum },
  statusHistory: [statusHistorySchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Job', jobSchema); 