const UsedCommandRecently = new Set();
module.exports.run = async (bot, message, args) => {
    if(UsedCommandRecently.has(message.author.id)){
                    message.reply("You can only use this command once every hour!")
                } else{
                
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    message.channel.send('AWOO GOD BIG NOOB');
                    
                    UsedCommandRecently.add(message.author.id);
                    setTimeout(() => {
                        UsedCommandRecently.delete(message.author.id)
                    }, 600000);
                }

}

module.exports.help = {
    name: "noobspam",
    aliases: ["spam"]
}