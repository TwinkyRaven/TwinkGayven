module.exports.run = async (bot, message, args) => {

    message.channel.send("What's new in update 1.1.0? \n-Added 8ball command \n-Minor bug fixes involving mc command \n \n What's new in update 1.1.1? \n-Minor bug fixes involving 8ball command. \n \n What's new in 1.1.2? \n-Major bug fixes involving 8ball command random generation. \n \n What's new in 1.1.3? \n -Fixed 8ball command. \n \n What's new in 1.1.4? \n -Changed the prefix from ! to . \n -No bug fixes since the bot was functioning perfectly due to big brain Raven :) \n \n What's new in 1.1.5? \n-!ravensfavsite can no longer be used in sfw channels. \n \n Huge update! What's new in 1.2.0? \n-Released currency system! Use .bal to get started \n-Added pay command! Donate your money to other players. \n-Added gamble command! Are you willing to take the risk? \n-Ping command now returns the bots response time! \n-Added daily command for daily rewards! \n-Added hug command! \n \n What's new in 1.2.1? \n-All data is now being hosted from a database! All benefits are mainly for the developer since it's easier to get code done now.")

}

module.exports.help = {
    name: "update",
    aliases: ["up"]
}