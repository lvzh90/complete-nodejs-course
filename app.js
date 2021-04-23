const fs = require('fs');

const writeFile = fs.createWriteStream('notes.txt');
writeFile.write('Te chelo SS \n');
writeFile.write('<3');
writeFile.end();

fs.appendFile('notes.txt', '\nFor ever', (err) => {
    if (err) throw err;

    console.log('The data was appended.')
})