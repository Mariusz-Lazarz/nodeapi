const mongoose = require("mongoose");

const cacheSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Cache = mongoose.model("Cache", cacheSchema);

module.exports = Cache;
