const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "lien",
    description: "more adv. help command" ,

    async run (bot, message, args) {

        const invite = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Discord')
        .addField('**Lien pour le serveur du bot**', 'https://discord.gg/t5EQ9nZxfh')

        const yo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Youtube')
        .addField('**Ma chaîne YouTube**', 'https://www.youtube.com/channel/UCR6UNXZI9G9pvObX20LsKSQ')

        const tg = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Site')
        .addField('**Le site web de mon bot**', 'https://devbotyt.netlify.app')
    
        const pages = [
            invite,
            yo,
            tg,
        ]
       
        const emojiList = ["⏪", "⏩"]
        
        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
        

        
    }
}

module.exports.config = {
    name: 'lien'
}