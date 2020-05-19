const Discord = require("discord.js");
const colors = require("../color.json")

module.exports.run = async (bot, message, args) => {

    let gifs = [
        "https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif",
        "https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif",
        "https://i.imgur.com/g91XPGA.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    
    let embed = new Discord.MessageEmbed();
    embed.setColor(colors.purple);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} punches ${bot.users.cache.get(user.id).username}!`);
    } else {
        embed.setTitle(`${message.author.username} wants a punch.`);
    }

    message.channel.send(embed)

}

module.exports.help = {
    name: "punch",
    aliases: []
}