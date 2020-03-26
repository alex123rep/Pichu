const Discord = require('discord.js')

  module.exports = {
    name: 'random-image',
    aliases: ['random', 'image'],
  category: 'fun',
  usage: 'pichu random-image <tag>',
	description: "Shows a random image",
	async execute (client,message,args) {
        if (!args) return message.channel.send('Please specify a tag!')
  if (!message.channel.nsfw) return message.channel.send('Due to some NSFW endpoints, this command is only avaible in nsfw channels')
          const { KSoftClient } = require('@ksoft/api');

          const ksoft = new KSoftClient(client.ksoftsi_token);
          
          /* I use a helper asnyc function called main here.
           * This would also work using a lambda function or class method,
           * as long as it's asynchronous.
           */
          async function main() {
              const { url } = await ksoft.images.reddit(args.join(' '));
              message.channel.send(new Discord.MessageEmbed()
              .setAuthor(client.user.tag, client.user.avatarURL({format: 'png', dynamic: true, size: 2048}))
      .setColor('RANDOM')
      .setDescription(`Image not showing? Click [here](${url}) !`)
      .setImage(url)
      .setTimestamp()
        .setFooter('Powered by Ksoft.si | Made by Lumap#0149')) 
        }
          
          main();
        
        
	}
};
