const mongoose = require("mongoose");
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const informationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  location: { type: String, required: true },
  clock: { type: [String], default: " " },
  website: { type: String },
  headphone: { type: String },
});
const servicePlaceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: "Feature",
      required: true,
    },
    properties: {
      type: informationSchema,
    },
    geometry: {
      type: pointSchema,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("servicePlace", servicePlaceSchema);
