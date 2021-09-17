const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
                + encodeURIComponent(address)
                + '.json?access_token=pk.eyJ1IjoibGluZGF6YXBhdGEiLCJhIjoiY2t0ZGs5dnAyMGdkZDJvcGg4dWo0dnNoNSJ9.vbiL_O1HoFHnUP36Tij_JQ';
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            return callback(`Unable to connect to location service. ${error}`, undefined);
        }

        if (body.message === 'Not Found' || body.features.length === 0) {
            return callback(`Unable to find location. Try another search. ${body}`, undefined);
        }

        const { center, place_name: location } = body.features[0];
        callback(undefined, {
            latitude: center[1],
            longitude: center[0],
            location
        })
    })
}

module.exports = geocode