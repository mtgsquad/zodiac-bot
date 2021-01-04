require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '-'
const VERIFY_ME_COMMAND = 'verify'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageDelete", msg => {
    msg.channel.send("STOP DELETING MSGS")
})

client.on('message', msg => {
    if (msg.content == 'I Love Zodiac Studios') {
        msg.react('❤')
    }

    if (msg.content === `${BOT_PREFIX}${VERIFY_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("789208896363298816")
}



client.login(process.env.BOT_TOKEN);