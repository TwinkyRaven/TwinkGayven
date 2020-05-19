const Discord = require("discord.js");
const colors = require("../color.json")

module.exports.run = async (bot, message, args) => {

    if (message.channel.nsfw === false) {
        return message.reply(":warning: This channel isn't marked as NSFW.");
        }
        let gifs = [
            "https://thumb-p9.xhcdn.com/a/OnknR1IgZXT9LgIB5jlhog/000/264/578/229_1000.gif",
            "https://thumb-p0.xhcdn.com/a/XuBqxV7Inh68FhUQJLRcHA/000/264/578/260_1000.gif",
            "https://i.4cdn.org/y/1582468950687.gif"
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];
    
        
        let embed = new Discord.MessageEmbed();
        embed.setColor(colors.purple);
        embed.setImage(pick);
    
        if(args[0]) {
            let user = message.mentions.members.first();
            embed.setTitle(`${message.author.username} fuck ${bot.users.cache.get(user.id).username}!`);
        } else {
            embed.setTitle(`${message.author.username} wants to fuck.`);
        }
    
        message.channel.send(embed)
    

}

module.exports.help = {
    name: "fuck",
    aliases: ["gay"]
}