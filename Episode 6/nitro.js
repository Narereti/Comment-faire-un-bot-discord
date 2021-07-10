const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send({
        files: [
            "./ressources/NitroPerks.js",

               ]
    })
}
module.exports.config = {
    name: 'nitro'
}