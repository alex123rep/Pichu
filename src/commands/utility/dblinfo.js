
  const Discord = require('discord.js')
  
  module.exports = {
    name: 'dblinfo',
    aliases: ['botinfo', 'bi'],
    description: 'Shows bot info (if listed on dbl)',
    category: 'utility',
    usage: 'pichu dblinfo <@mention/bot-id/bot-name>',
    async execute(client,message,args,dbl) {
        if (!args.join(' ')) return message.channel.send('Please mention the bot, give bot ID or bot name');
        let member = client.functions.get('findByID').execute(message.guild,args.join(' ')) || message.mentions.members.first() || client.functions.get('findByUsername').execute(message.guild,args.join(' ')) || message.member
        let user = member.user
       if (!user) return message.channel.send('Bot not found!');
        if (!user.bot) return message.channel.send('This is not a bot!');
        dbl.getBot(user.id).then(bot => {
          
            let e = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('DBL Botinfo results : ')
            .setThumbnail(user.avatarURL({format: 'png', dynamic: true, size: 2048}))
            .addFields(
              { name: 'Bot name :', value: bot.username, inline: true },
              { name: 'Bot discriminator (tag) :',value: bot.discriminator, inline: true },
              { name: 'Bot ID :', value: bot.id, inline: true },
              { name: 'Bot library :', value: bot.lib, inline: true },
              { name: 'Bot prefix(es) :', value: bot.prefix, inline: true },
              { name: 'Bot short desc :', value: bot.shortdesc, inline: true },
              { name: 'Bot total votes :', value: bot.points, inline: true },
              { name: 'Bot monthly votes :', value: bot.monthlyPoints, inline: true },
              { name: 'Bot approval date :', value: bot.date, inline: true }
              )
              
            let bottags = ''
            bot.tags.forEach(tag => bottags += tag+', ')
            if (!bottags) bottags = 'No tags'
            e.addFields({ name: 'Bot tags :', value: bottags, inline: true })
            let links = ''
            links += `[Invite](${bot.invite})`
            if (bot.website) links += ` | [Website](${bot.website})`
            if (bot.support) links += ` | [Support Server](https://discord.gg/${bot.support})`
            if (bot.github) links += ` | [Github](${bot.github})`
            let botowners = ''
            bot.owners.forEach(owner => botowners += owner + ', ')
            e.addFields({name: 'Bot owners ID :', value: botowners})
            if (bot.certifiedBot) {e.addFields({ name: 'Is bot certified ?', value: 'Yes', inline: true })}
            else {e.addFields({ name: 'Is bot certified ?', value: 'No', inline: true })}
            if (bot.vanity) {e.addFields({ name: 'Bot vanity URL :', value: bot.vanity, inline: true })}
            e.addFields({name: 'Links', value: links, inline: true})
            e.setFooter('Made by Lumap#0149')
            message.channel.send(e)
        })
    },
  };
  