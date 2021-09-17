const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
                + encodeURIComponent(address)
                + '.json?access_token=pk.eyJ1IjoibGluZGF6YXBhdGEiLCJhIjoiY2t0ZGs5dnAyMGdkZDJvcGg4dWo0dnNoNSJ9.vbiL_O1HoFHnUP36Tij_JQ';
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback(`Unable to connect to location service. ${error}`, undefined);
            return;
        }
        
        if (response.body.features.length === 0) {
            callback(`Unable to find location. Try another search. ${response.body}`, undefined);
            return;
        }

        const feature = response.body.features[0];
        callback(undefined, {
            latitude: feature.center[1],
            longitude: feature.center[0],
            location: feature.place_name
        })
    })
}

module.exports = geocode