const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = Schema({
  image_id: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Upload = mongoose.models.Upload || mongoose.model("Upload", uploadSchema);
module.exports = Upload;
