const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { argv } = require('yargs');

yargs(process.argv.slice(2))
.command('add', 'Add a note', (yargs) => {
    console.log('Adding note', yargs)
})
.argv

yargs(hideBin(process.argv))
.command('remove', 'Remove a note', (yargs) => {
    console.log('Removing note')
})
.parse()

yargs(hideBin(process.argv))
.command('edit', 'Editing a note', (yargs) => {
    console.log('Editing note')
})
.parse()

yargs(hideBin(process.argv))
.command('list', 'List your notes', (yargs) => {
    console.log('Listing out all note')
})
.parse()

yargs(hideBin(process.argv))
.command('read', 'Reading a note', (yargs) => {
    console.log('Reading note')
})
.parse()
