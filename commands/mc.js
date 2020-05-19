module.exports.run = async (bot, message, args) => {
    const ping = require('minecraft-server-util')
    const Discord = require('discord.js');

    if(!args[0]) return message.channel.send('You must type a minecraft server ip')
    if(!args[1]) return message.channel.send('You must type a minecraft server port')

    ping(args[0], parseInt(args[1]), (error, reponse) =>{
        if(error) throw error
        const Embed = new Discord.MessageEmbed()
        .setTitle('Server Status')
        .addField('Server IP', reponse.host)
        .addField('Server Version', reponse.version)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Max Players', reponse.maxPlayers)
           
            message.channel.send(Embed)
        })
}

module.exports.help = {
    name: "mc",
    aliases: ["minecraft"]
}