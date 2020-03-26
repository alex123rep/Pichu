const Discord = require('discord.js');
module.exports = async (client,guild) => {
    client.user.setActivity(`Is a pokémon | ${client.guilds.cache.size} servers | ${client.config.prefix}help`)
    const guildDelete = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(guild.iconURL({format: 'png', dynamic: true, size: 2048}))
    .setTitle('Kicked/banned from a guild :(')
    .setDescription(`Guild name : ${guild.name}\nGuild id : ${guild.id}\nGuild owner ID : ${guild.ownerID}`)
  
    client.channels.cache.get(client.config.channels.guildDelete).send(guildDelete)
}