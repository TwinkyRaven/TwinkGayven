const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const {Client, RichEmbed } = require('discord.js')
const ping = require('minecraft-server-util')
const fs = require('fs');
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
bot.aliases = new Discord.Collection

bot.login(botconfig.token);

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on 3 servers!`);
    bot.user.setActivity(`with my dick!`);
})

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })
    })
})

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    let prefix = botconfig.prefix;

    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
})


