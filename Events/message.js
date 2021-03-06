module.exports = (client, message) => {

    const config = require('../config');
    client.config = config;

    let prefix = config.prefix;

    // Ignore bots
    if (message.author.bot) return;

    const reactJ = require('../Jobs/react');
    reactJ(message);

    // Only listen to commands, ignore normal messages
    if (message.content.indexOf(prefix) !== 0) return;


    // Get the command from the message
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log('Attempting to run command', command);

    // Fetch the executable command from the client
    const cmd = client.commands.get(command);

    if (!cmd) return;
    cmd.run(client, message, args);
};