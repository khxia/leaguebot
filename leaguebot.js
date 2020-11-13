const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'opgg') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!\nUsage:\n!opgg {champion name}\n!opgg {champion name} {mid/bot/support/jungle/top}`);
        }
        else if (args.length === 1) {
            const champion = args[0].toLowerCase();
            return message.channel.send(`https://www.op.gg/champion/${champion}`);
            // commands.CreateCommand("website").Do(
            //     async (e) => {
            //         await e.Channel.SendMessage(`https://www.op.gg/champion/${champion}`);
            //     }
            // );
        }
        else if (args.length === 2) {
            const champion = args[0].toLowerCase();
            const lane = args[1].toLowerCase();
            return message.channel.send(`https://www.op.gg/champion/${champion}/statistics/${lane}`);
        }
        else {
            return message.channel.send(`You didn't gave too many arguments ${message.author}!\nUsage:\n!opgg {champion name}\n!opgg {champion name} {mid/bot/support/jungle/top}`);
        }
    }

    if (command === 'pb' || command === 'probuilds') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!\nUsage:\n!pb/probuilds {champion name}`);
        }
        else if (args.length === 1) {
            const champion = args[0].toLowerCase();
            return message.channel.send(`https://www.probuilds.net/champions/details/${champion}`);
        }
    }
});

client.login(token);

