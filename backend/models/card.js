const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  power: { type: Number, required: true, default: 10 }, 
  description: { type: String, required: true },
  hp: { type: Number, required: true, default: 100 }, 
  level: { type: Number, required: true, default: 1 }, 
  speed: { type: Number, required: true, default: 10 }, 
  stamina: { type: Number, required: true, default: 10 }, 
  theme: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Card", cardSchema);
