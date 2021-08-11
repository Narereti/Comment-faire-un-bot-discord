const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "shows the current weather in a specified location",

    async run (bot, message, args) {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Mettez un pays apres **weather** svp! Comme ça: d!weather Paris')

            if(result === undefined || result.length === 0) return message.channel.send('**Location invalide!**')
           if (message.content === 'd!weather') return message.channel.send('**Veuillez mettre une localisation...**')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setColor(0x111111)
            .setAuthor(`Prévisions météo pour ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('Fuseau horaire', `UTC ${location.timezone}`, true)
            .addField('Type de degrés', 'Celcius', true)
            .addField('Temperature', `${current.temperature}°`, true) 
            .addField('Vent', `${current.winddisplay}`, true)
            .addField('Sens comme', `${current.feelslike}°`, true)
            .addField('Humidité', `${current.humidity}%`, true)

            message.channel.send(embed)
        })
    }
}
module.exports.config = {
    name: 'weather'
}