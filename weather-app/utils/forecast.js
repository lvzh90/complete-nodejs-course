const request = require('request')

const forescat = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c59a2f758b6643ef821c65d80bc29e21&'
    + 'query=' + latitude + ',' + longitude
    + '&units=f';

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback(`Unable to connect to weather service. ${error}`, undefined);
            return;
        }
        
        if (response.body.error) {
            callback(response.body.error, undefined);
            return;
        }

        const current =  response.body.current;
        const weatherDescription = current.weather_descriptions;
        const temperature = current.temperature;
        const feelslike = current.feelslike;
        const msg = `${weatherDescription[0]}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;
        callback(undefined, msg)
    })
}

module.exports = forescat