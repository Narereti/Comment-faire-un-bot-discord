const Discord = require('discord.js');
const client = new Discord.Client
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs')

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files ) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) {
        console.log('Aucune commande a été trouvée dans le HANDLER !')
    }

    jsfile.forEach((f, i) => {
        let props =require(`./commands/${f}`);
        console.log(`HANDLER: ${f} a été detecter !`)
        client.commands.set(props.config.name, props)
    })
})

client.on("message", async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(command.slice(prefix.length))
    if(commandFile) commandFile.run(client, message, args)
})

client.on("ready", async () => {
    console.log('Le bot est co sur Discord !')
    let statuses = [
        `Je suis sur ${client.guilds.cache.size} serveur !`,
        'Je veux manger des patates',
        'ect...'
    ]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "STREAMING"})
    }, 5000)
})

client.on("guildCreate", (guild) => {
    let MessToSend

    guild.channels.cache.forEach((channel) => {
        if(
            channel.type === 'text' &&
            !MessToSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) MessToSend = channel
    }) ;

    if(!MessToSend) return;

    MessToSend.send(
        new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
            "Je suis un message qui est envoyée quand j'ai rejoins un serveur ! \n Abonne toi a Nare Reti!:https://www.youtube.com/channel/UCR6UNXZI9G9pvObX20LsKSQ"
        )
    )
})
//message detecteur "sans le tag"
client.on('message', message => {
    if (message.content ===  "bonjour") {
        
        message.channel.send(`Coucou`);
        
    }
   })
//messgae detecteur avec le tag
client.on('message', message => {
    if (message.content ===  "cc") {
        
        message.reply(`Coucou`);
        
    }
   })

client.login(config.token)