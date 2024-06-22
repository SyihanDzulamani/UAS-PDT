const mongoose = require("mongoose");

const tugasSchema = new mongoose.Schema({
  tugas: {
    type: String,
    required: true,
    trim: true,
  },
  matkul: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    require: true,
  },
});

const Tugas = mongoose.model("Tugas", tugasSchema);

module.exports = Tugas;
