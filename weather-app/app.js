const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

yargs(hideBin(process.argv))
.command('search', 'Search a city',
(yargs) => {
    yargs.option('cityName', {
        describe: 'City name',
        demandOption: true,
        type: 'string'
    })
},
(argv) => {
    geocode(argv.cityName, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log('Error: ', error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error);
            }
            
            console.log('Location: ', location);
            console.log('ForecastData: ', forecastData);
        })
    })
})
.parse()




