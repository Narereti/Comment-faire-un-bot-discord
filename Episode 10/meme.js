const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "meme command, sends a meme from certain place",

    async run (bot, message, args) {
        const subReddits = ["meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Votre **meme** a été accordé. Tout le chemin depuis r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}

module.exports.config = {
    name: 'meme'
}