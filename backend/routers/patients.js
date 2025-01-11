const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find({});
  res.json(patients);
});

// Add a new patient
router.post('/', async (req, res) => {
  const { name, roomNumber, foodPreference, mealPlan } = req.body;
  const patient = new Patient({ name, roomNumber, foodPreference, mealPlan });
  const createdPatient = await patient.save();
  res.status(201).json(createdPatient);
});

// Delete a patient
router.delete('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (patient) {
    await patient.remove();
    res.json({ message: 'Patient removed' });
  } else {
    res.status(404).json({ message: 'Patient not found' });
  }
});

module.exports = router;
