const fs = require('fs');

const writeFile = fs.createWriteStream('notes.txt');
writeFile.write('Te chelo SS \n');
writeFile.write('<3');
writeFile.end();