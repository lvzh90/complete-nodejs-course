const request = require('request')

const forescat = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c59a2f758b6643ef821c65d80bc29e21&'
    + 'query=' + latitude + ',' + longitude
    + '&units=f';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            return callback(`Unable to connect to weather service. ${error}`, undefined);
        }
        
        if (body.error) {
            return callback(body.error, undefined);
        }

        const { weather_descriptions: weatherDescription, temperature, feelslike } =  body.current;
        const msg = `${weatherDescription[0]}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;
        callback(undefined, msg)
    })
}

module.exports = forescat