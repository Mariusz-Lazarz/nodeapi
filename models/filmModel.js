const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  episode_id: { type: Number, required: true },
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
});

module.exports = {
  Film: mongoose.model("Film", filmSchema, "films"),
};
