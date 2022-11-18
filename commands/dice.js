const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('0 ~ 100 random number'),
	async execute(interaction) {
        let max = 100;
        let min = 0;
        let rand = Math.floor(Math.random() * (max - min)) + min;
		await interaction.reply("your Dice = "+rand);
	},
};