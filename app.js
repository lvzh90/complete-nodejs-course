function getCommandsBuilder(command) {

    const commandMatch = {
        add: () => console.log('Adding note'),
        remove: () => console.log('Removing note'),
        edit: () => console.log('Editing note'),
        default: () => console.log('Command no supported'),
    }

    return (commandMatch[command] || commandMatch['default']);
}

const command = getCommandsBuilder(process.argv[2]);
command();