const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "helpinfo",
    description: "more adv. help command",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Information Du bot')
        .addField('**Prefix**', 'Le prefix est: `d!`')
        .addField('**Pages**', '`1.Utilitaires `, `2.Information`, `3.Amusement`, `4.Administartion`')
        .addField('**Navigation Aide**', 'Utilisez les flèches ci-dessous pour parcourir les pages !')

        const Information = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Information')
        .addField('`d!ping`', 'Montre ta latence!')
        .addField('`d!covid`',"Permet de voir l'avancement du covid dans le pays que vous voulez et meme dans le monde (d!covid monde)!")
    

        const fun = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Amusement')
        .addField('`d!say`', 'Permet de parler a la place du bot')
        .addField('`d!meme`', 'Envoie un meme aléatoire à partir de redits aléatoires de memes !')
        .addField('`d!cb`','Vous répondra toujours!(mais en anglais)')
      
        
        
        const Utilitaires = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Utilitaires')
        .addField('`d!nitro`', "Permet d'avoir le lien du plugin ")
       
    
        
        const Administration = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Administration')
        .addField('`d!ban`', 'Permet de ban une personne')
        .addField('`d!kick`','Permet de kick une personne')
        

        const pages = [
            BotInfo,
            Information,
            fun,
            Utilitaires,
            Administration,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '60000';

        pagination(message, pages, emojiList, timeout)
    }
}

module.exports.config = {
    name: 'helpinfo'
}