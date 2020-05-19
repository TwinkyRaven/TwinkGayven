module.exports.run = async (bot, message, args) => {
    var version = '1.2.1'

    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
    .setTitle('User info')
    .addField('User Name', message.author.username)
    .addField('Bot Version', version)
    .addField('Server Name', message.guild.name)
    .addField('Bot developer', 'TwinkyRaven')
    .setThumbnail(message.author.displayAvatarURL())
    .setColor(0xA569BD)
    message.channel.send(embed);

    
}
module.exports.help = {
    name: "info",
    aliases: ["information"]
}