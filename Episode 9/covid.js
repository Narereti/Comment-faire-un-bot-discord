const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async run (client, message, args){

        let countries = args.join(" ");

    
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Arguments manquant')
        .setColor(0xFF0000)
        .setDescription('Il vous manque des args (ex: d!covid monde || d!covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "monde"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Statistiques pour le monde 🌎`)
                .addField('Cas confirmé', confirmed)
                .addField('Rétabli(e)s', recovered)
                .addField('Morts', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Statistiques pour **${countries}**`)
                .addField('Cas confirmé', confirmed)
                .addField('Rétabli(e)', recovered)
                .addField('Mort', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Pays invalide')
            })
        }
    }
}

module.exports.config = {
    name: 'covid'
}