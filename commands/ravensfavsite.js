module.exports.run = async (bot, message, args) => {

    if (message.channel.nsfw === false) {
        return message.reply(":warning: This channel isn't marked as NSFW.");
        }
        message.channel.send("www.pornhub.com/gay")
    

}

module.exports.help = {
    name: "ravensfavsite",
    aliases: ["rav"]
}
