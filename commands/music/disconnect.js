module.exports = {
	name: 'disconnect',
  category: 'music',
  usage: 'pichu disconnect',
	description: 'disonnects to the VC',
	async execute(client,message,args,dbl,queue) {
		if (serverQueue.songs[0].author.id !== message.author.id) return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setDescription(`Only **${serverQueue.songs[0].author.username}** can do this, beacause he requested the current song`) .setFooter('Made by Lumap#0149')).then(m => {setTimeout(() => {m.delete()}, 15000)})
  
		const Discord = require('discord.js')
		let voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.send('You\'re not connected to a voice channel!')
  
    voiceChannel.leave()
    message.channel.send('Goodbye!')
	},
};
