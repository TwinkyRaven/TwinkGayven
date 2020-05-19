const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
const mongoose = require("mongoose")
const fs = require("fs")

mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Data = require("../models/data.js")

module.exports.run = async (bot, message, args) => {

    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
        if(err) console.log(err)
        if(!data) {
            const newData = new Data({
                name: message.author.username,
                userID: message.author.id,
                lb: "all",
                money: 0,
                daily: 0,
            })
            newData.save().catch(err => console.log(err));
            return message.reply("Your too poor lmfao")
        } else {
            var maxBet = 10000;

            if(data.money <= 0) return message.reply("You have no money lmfao.");

            if(!args[0]) return message.reply("wtf r u trying to gamble.");

            if(args[0].toLowerCase() == "all") args[0] = data.money;

            try{
                var bet = parseFloat(args[0]);
            } catch {
                return message.reply("Dude enter a fucking number");
            }

            if(bet != Math.floor(bet)) return message.reply("Enter a whole number");

            if(data.money < bet) return message.reply("You dont have that much money");

            if(bet > maxBet) return message.reply("Max bet allowed is 10,000");

            if(bet <= 0) return message.reply("CuteDevRaven patched this glitch :)")

            let chances = ["win", "lose"];
            var pick = chances[Math.floor(Math.random() * chances.length)];

            if(pick == "lose") {
                data.money -= bet;
                data.save().catch(err => console.log(err));
                return message.reply(`You lose. New balance: ${data.money}`);
            } else {
                data.money += bet;
                data.save().catch(err => console.log(err));
                return message.reply(`You win. New balance: ${data.money}`);

            }
                }
            })

   
}

module.exports.help = {
    name: "gamble",
    aliases: ["bet"]
}