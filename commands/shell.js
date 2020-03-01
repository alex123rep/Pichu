const { RichEmbed } = require("discord.js");
const fs = require("fs");
let exec = require("child_process").exec

module.exports = {
  name: "terminal",
  aliases: ['shell','sh'],
  category: 'owner',
  description: "It's a cool command!",
  async execute(client,message,args) {

 let date = new Date()
  exec(args.join(" "), function (err, stdout, stderr) {
    if (!err) err = "-"
    if (!stdout) stdout = "-"
    if (!stderr) stderr = "-"
    if (err.length + stdout.length + stderr.length > 1024) {
      message.channel.send(`The output is too big sending it to the js console insted!\nThe output is ${err.length + stdout.length + stderr.length} / 1024 long!`)
      console.log(`${err}\n${stdout}\n${stderr}`);
    } else {
      const embed = new MessageEmbed()
        .setTitle("Terminal")
        .setColor("55ff55 ")
        .addFields(
          {name: "**err**", value: err + "** **"},
          {name: "**stdout**", value: stdout + "** **"},
          {name: "**stderr**", value: stderr + "** **"}
        )
        .setFooter('Made by Lumap#0149')
      message.channel.send(embed);
    };
  });

},
};
