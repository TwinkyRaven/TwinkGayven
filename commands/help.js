module.exports.run = async (bot, message, args) => {

    message.channel.send('List of commands: \n*!ping* - Pong \n*!ravensfavsite* - Shows the developers favourite site \n*!IsNoob* - Arguments: raven, overthere, awoo \n*!clear* - Admin only! clears a specified number of messages. \n*!noobspam* - suprise \n*!info* - Displays user and bot info \n*!mute* - Mutes a specified user for a specified amount of time \n*!mc* - Type server ip then 25565 for port \n*!gn* - Makes Overthere say sweet dreams \n*!8ball* - Ask the 8ball a question! \n*!update* - Whats new? \n*!bal* - checks your account balance \n*!pay* - Pays a certain user the amount of money specified \n*!gamble* - bet a certain amount of money, double it or lose it! \n*!daily* - Collect a daily reward! \n*!hug* - give someone a hug :3 \n*!punch* - punch someone if they annoy you! \n*!gay* - NSFW channels only! Sexy suprise ;)')

}

module.exports.help = {
    name: "help",
    aliases: ["help2"]
}