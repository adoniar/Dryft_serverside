const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

// Get all trips
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new trip
router.post('/', async (req, res) => {
    const trip = new Trip({
        destination: req.body.destination,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        activities: req.body.activities,
        notes: req.body.notes
    });

    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;