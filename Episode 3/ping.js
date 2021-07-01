const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete()
    if(message.author.bot) return

    let msg = await message.channel.send("Nous sommes entrain de faire le test...")
    msg.delete();

    let PING = new Discord.MessageEmbed()
    .setColor('#c0b716')
    .setThumbnail('https://cdn.discordapp.com/attachments/830900465578541082/838839408823369728/84c2e0fec0b0d22176c10413a7d76cf1b72c110e.png')
    .setTitle("PONG !")
    .setDescription("Voici les résultats de votre demande :")
    .addField("Ma latence est de :", Math.floor(msg.createdAt - message.createdAt)+ " " + "ms") 
    .setTimestamp()
    message.channel.send(PING)
}

module.exports.config = {
    name: 'ping'
}