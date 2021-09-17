const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c59a2f758b6643ef821c65d80bc29e21&query=37.8267,-122.4233&units=f';
const url_bad = 'http://api.weatherstack.com/current?access_key=c59a2f758b6643ef821c65d80bc29e21&query=&units=f';
request({ url: url, json:  true }, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(response.body.current)

    if (error) {
        console.log(`Unable to connect to weather service. ${error}`);
        return;
    }
    
    if (response.body.error) {
        console.log(response.body.error);
        return;
    }

    const current =  response.body.current;
    const weatherDescription = current.weather_descriptions;
    const temperature = current.temperature;
    const feelslike = current.feelslike;

    console.log(`${weatherDescription[0]}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`);
    
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGluZGF6YXBhdGEiLCJhIjoiY2t0ZGs5dnAyMGdkZDJvcGg4dWo0dnNoNSJ9.vbiL_O1HoFHnUP36Tij_JQ'
const geocodeURL_bad = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12wha.json?access_token=pk.eyJ1IjoibGluZGF6YXBhdGEiLCJhIjoiY2t0ZGs5dnAyMGdkZDJvcGg4dWo0dnNoNSJ9.vbiL_O1HoFHnUP36Tij_JQ'
request({ url: geocodeURL_bad, json:  true }, (error, response) => {
    if (error) {
        console.log(`Unable to connect to location service. ${error}`);
        return;
    }
    
    if (response.body.features.length === 0) {
        console.log(`Unable to find location. Try another search. ${response.body}`);
        return;
    }
    
    const body =  response.body;
    const latitude = body.features[0].center[1]
    const longitude = body.features[0].center[0]

    console.log(latitude, longitude);
})
