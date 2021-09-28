const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const router = new express.Router();

router.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an addresss!'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

module.exports = router;
