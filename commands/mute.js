module.exports.run = async (bot, message, args) => {
    const ms = require('ms');
    if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send("You don't have permissions.")
            let person = message.guild.member(message.mentions.users.first() || message.guild.roles.cache.find(args[1]))
            if(!person) return message.reply('Cannot find specified user!');

            let mainrole = message.guild.roles.cache.find(role => role.name === "watches too much porn");
            let muterole = message.guild.roles.cache.find(role => role.name === "muted");
            if(!muterole) return message.reply('I cannot mute that user...');
            let time = args[1];
            if(!time) return message.reply('I need to know for how long to mute them idiot.');
            person.roles.remove(mainrole.id);
            person.roles.add(muterole.id);
            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);
            setTimeout(function(){
                person.roles.remove(muterole.id);
                person.roles.add(mainrole.id);
                message.channel.send(`@${person.user.tag} has now been unmuted!`)

            }, ms(time));


  
}

module.exports.help = {
    name: "mute",
    aliases: ["mutate"]
}