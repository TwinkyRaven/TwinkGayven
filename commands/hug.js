const Discord = require("discord.js");
const colors = require("../color.json")

module.exports.run = async (bot, message, args) => {

    let gifs = [
        "https://media1.tenor.com/images/7cf42c61f9364d8d70d1da17fae5c508/tenor.gif",
        "https://i.imgur.com/r9aU2xv.gif",
        "https://acegif.com/wp-content/gif/anime-hug-38-gap.jpg"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    
    let embed = new Discord.MessageEmbed();
    embed.setColor(colors.purple);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} hugs ${bot.users.cache.get(user.id).username}!`);
    } else {
        embed.setTitle(`${message.author.username} wants a hug.`);
    }

    message.channel.send(embed)

}

module.exports.help = {
    name: "hug",
    aliases: []
}