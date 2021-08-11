const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        description: 'flips a coin',
        usage: ' ',
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Pile';
        else result = 'Face';
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**${message.member.displayName} a eu ${result}**!`)
        message.channel.send(embed);
    }
};

module.exports.config = {
    name: 'flip'
}