module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const {MessageEmbed} = require('discord.js');
    if(!args[2])return message.channel.send(`You did not specify your question!`)
    else{
        let responses=[
            "Yes",
            "No",
            "idk but i do know that your stupid",
            "I am an 8ball, not a deal with your shit ball"
        ]
        let response = responses[Math.floor(Math.random()*(responses.length))]
        let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`My reply: ${response}`)
        .setColor(`RANDOM`)
        message.channel.send(Embed)
    }
}

module.exports.help = {
    name: "8ball",
    aliases: ["eightball"]
}