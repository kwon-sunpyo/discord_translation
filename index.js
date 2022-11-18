const fs = require('node:fs');
const path = require('node:path');
const config = require("./config.json");

const trans = require("./trans/trans");

const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.DirectMessages,GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, msg => {
	if (msg.author.bot) return;

	let trans_cont = '';

	trans.tranlate_lang(msg.content).then( async res => {
		if(res.length > 0){
			trans_cont = res.join('\n');
			msg.reply(trans_cont);
		}else{
			console.log(res);
		}
		
	}).catch(err => {
		msg.reply(err);
		console.log(err);
	});

	//msg.reply(msg.content);
});

client.login(config.token);
