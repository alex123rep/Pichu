const Discord = require('discord.js');
module.exports = async (client,guild) => {
    client.user.setActivity(` ${client.config.prefix}help | ${client.guilds.cache.size} servers | ${client.functions.get('totalUsers').execute(client)} users`)
 const guildDelete = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(guild.iconURL({format: 'png', dynamic: true, size: 2048}))
    .setTitle('Kicked/banned from a guild :(')
    .setDescription(`Guild name : ${guild.name}\nGuild id : ${guild.id}\nGuild owner ID : ${guild.ownerID}`)
  
    client.channels.cache.get(client.config.channels.guildDelete).send(guildDelete)
}