const Discord = require('discord.js');
module.exports =  async (client,guild) => {
    if (guild.id === '538361750651797504') return guild.leave()
<<<<<<< HEAD
    client.user.setActivity(` ${client.config.prefix}help | ${client.guilds.cache.size} servers | ${client.functions.totalUsers(client)} users`)
=======


    client.user.setActivity(` ${client.config.prefix}help | ${client.guilds.cache.size} servers | ${client.functions.totalUsers(client)} users`)
  
>>>>>>> 8228ecf6bbd83210346f9fdedd59d0c34ea1de03
 const guildCreate = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(guild.iconURL({format: 'png', dynamic: true, size: 2048}))
    .setTitle('New guild!')
    .setDescription(`Guild name : ${guild.name}\nGuild id : ${guild.id}\nGuild owner ID : ${guild.ownerID}`)
  
    client.channels.cache.get(client.config.channels.guildCreate).send(guildCreate)
}