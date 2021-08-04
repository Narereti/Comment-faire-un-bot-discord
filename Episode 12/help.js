const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefix- `t!`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields({
            name: 'A propos',
            value: 'Yooooooo voici mon bot de youtube',
        },
        {
            name: 'Information',
            value: '`ping`|  `covid`',        
        },
        {
            name: 'Amusement',
            value: ' `meme`|`say` |`cb`  ',
        },
        {
            name: 'Administration',
            value: '`kick`|`ban`'
        },
        {
            name: 'Utilitaires',
            value: '`nitro`'


        },
        {
          name: 'INFO',
          value: '`Pour voire les info des commandes tappez t!helpinfo`'

        },)
        

        

        message.channel.send(help)
    }
}

module.exports.config = {
    name: 'help'
}