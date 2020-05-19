const botconfig = require("../botconfig.json")
const mongoose = require("mongoose")
const Data = require("../models/data.js")
const fs = require("fs");

mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    if(!user) return message.reply("Try entering an actual user you dipshit.");
    if(user.id === message.author.id) return message.reply("Are you actually that dumb or you pretending?")

    Data.findOne({
        userID: message.author.id
    }, (err, authorData) => {
        if(err) console.log(err);
        if(!authorData) {
            return message.reply("You dont have money idiot")
        } else {
            Data.findOne({
                userID: user.id
            }, (err, userData) => {
                if(err) console.log(err);
                if(!args[1]) return message.reply("I need to know how much money you want to give idiot.");

                if(parseInt(args[1]) > authorData.money) return message.reply("You dont have enough broke boi");
                if(parseInt(args[1]) < 1) return message.reply("Wtf are you trying to donate, air?");


                if(!userData) {
                    const newData = new Data({
                        name: bot.users.cache.get(user.id).username,
                        userID: user.id,
                        lb: "all",
                        money: parseInt(args[1]),
                        daily: 0,
                    })
                    authorData.money -= parseInt(args[1]);
                    newData.save().catch(err => console.log(err));
                    authorData.save().catch(err => console.log(err));
                } else {
                    userData.money += parseInt(args[1]);
                    authorData.money -= parseInt(args[1]);
                    userData.save().catch(err => console.log(err));
                    authorData.save().catch(err => console.log(err));


                }
                return message.channel.send(`${message.author.username} payed $${args[1]} to ${bot.users.cache.get(user.id).username}`);
            })
        }
    })

    
    
    
}

module.exports.help = {
    name: "pay",
    aliases: []
}