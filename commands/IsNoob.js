module.exports.run = async (bot, message, args) => {

    if(args[1] === 'overthere'){
        message.channel.send('Yes a bit nooby');
    }
    if(args[1] === 'raven'){
        message.channel.send('No not at all, also very cute');
    }
    if(args[1] === 'awoo'){
        message.channel.send('YES BIG NOOB');
    }

}

module.exports.help = {
    name: "IsNoob",
    aliases: ["noob"]
}