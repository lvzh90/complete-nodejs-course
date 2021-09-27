const express = require('express');
const router = new express.Router();

router.get('/weather', (req, res) => {
    res.send({
        forescast: 'It is snowing',
        location: 'Philadelphia'
    });
})

module.exports = router;
