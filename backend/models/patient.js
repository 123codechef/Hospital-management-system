const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    roomNumber: { type: Number, required: true },
    foodPreference: { type: String, required: true },
    mealPlan: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Patient', patientSchema);
