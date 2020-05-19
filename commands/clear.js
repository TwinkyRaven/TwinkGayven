module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send("You don't have permissions.")
                if(!args[0]) return message.reply('u didnt tell me a number idiot')
                message.channel.bulkDelete(args[0]);
}

module.exports.help = {
    name: "clear",
    aliases: ["remove"]
}