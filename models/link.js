const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Link", linkSchema);
